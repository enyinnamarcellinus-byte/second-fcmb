(function() {
    if (window.__chatwootInitialized) return;
    window.__chatwootInitialized = true;

    const CONFIG = {
        BASE_URL: "https://chatwoot.fcmb.com",
        WEBSITE_TOKEN: "HuPNcPq7DD12wabmhB1BJU2X",
        KONG_FIREWALL: "3E4hOcNQJmX1HM4y9sE6Ije0ITy6RJ8U",
        WARNING_API_URL: "https://routetemi.prapi.getrova.io/middleware/api/warning/message",
        RESOLVE_API_URL: "https://routetemi.prapi.getrova.io/middleware/api/warning/resolve",
        INACTIVITY_TIMEOUT: 240000,
        CLOSE_TIMEOUT: 240000,
        CHATWOOT_SCRIPT_URL: "https://chatwoot.fcmb.com/packs/js/sdk.js",
        LAUNCHER_TITLE: "Chat with TEMI",
        WIDGET_TYPE: "expanded_bubble",
        MESSAGE_SEND_DEBOUNCE: 2000, // Increased to 2 seconds
        FORM_SUBMIT_DEBOUNCE: 500
    };

    let inactivityTimeout = null;
    let warningTimeout = null;
    let countdownInterval = null;
    let warningSent = false;
    let currentConversationId = null;
    let countdownValue = 0;
    let chatContainer = null;

    // Enhanced message sending control
    let lastMessageContent = '';
    let lastMessageTime = 0;
    let messageSendTimeout = null;
    let pendingMessages = new Set(); // Track pending messages to prevent duplicates
    let messageListenersAdded = new Set(); // Track added event listeners
    let conversationResolved = false; // Track if current conversation is resolved

    // Enhanced debounce with request tracking
    function debounce(func, wait, immediate = false) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func.apply(this, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(this, args);
        };
    }

    // Generate unique message ID for tracking
    function generateMessageId(content) {
        return `msg_${Date.now()}_${content.substring(0, 20).replace(/\s/g, '_')}`;
    }

    // Enhanced message interception with better duplicate prevention
    function interceptMessageSending() {
        function setupMessageInterception() {
            const chatContainer = document.querySelector(".woot-widget-holder");
            const messageForm = document.querySelector(".woot-input-box form, .woot--composer");
            const sendButton = document.querySelector(".woot--send-button, .woot-send-button, [data-testid='send-button']");
            const inputField = document.querySelector(".woot-input-box input, .woot-input-box textarea, .woot--composer input, .woot--composer textarea");

            if (chatContainer && (messageForm || sendButton || inputField)) {
                console.log("Setting up enhanced message interception");

                // Clear existing listeners first
                clearExistingListeners();

                if (messageForm && !messageListenersAdded.has('form')) {
                    messageForm.addEventListener('submit', handleFormSubmit, true);
                    messageListenersAdded.add('form');
                }

                if (sendButton && !messageListenersAdded.has('button')) {
                    sendButton.addEventListener('click', handleSendButtonClick, true);
                    messageListenersAdded.add('button');
                }

                if (inputField && !messageListenersAdded.has('input')) {
                    inputField.addEventListener('keydown', handleInputKeydown, true);
                    messageListenersAdded.add('input');
                }

                observeForNewElements();
            } else {
                setTimeout(setupMessageInterception, 500);
            }
        }

        setupMessageInterception();
    }

    // Clear existing event listeners to prevent duplicates
    function clearExistingListeners() {
        messageListenersAdded.clear();

        // Remove any existing listeners by cloning and replacing elements
        const elements = document.querySelectorAll('.woot-input-box form, .woot--composer, .woot--send-button, .woot-send-button');
        elements.forEach(element => {
            const newElement = element.cloneNode(true);
            element.parentNode.replaceChild(newElement, element);
        });
    }

    // Enhanced duplicate prevention
    function shouldPreventDuplicate(messageContent) {
        if (!messageContent) return false;

        const messageId = generateMessageId(messageContent);
        const now = Date.now();
        const timeSinceLastMessage = now - lastMessageTime;

        // Prevent if message is currently pending
        if (pendingMessages.has(messageId)) {
            console.log("Message already pending:", messageId);
            return true;
        }

        // Prevent if same content within debounce window
        if (messageContent === lastMessageContent && timeSinceLastMessage < CONFIG.MESSAGE_SEND_DEBOUNCE) {
            console.log("Duplicate message prevented:", messageContent);
            return true;
        }

        // Prevent if conversation is resolved
        if (conversationResolved) {
            console.log("Message prevented - conversation resolved");
            return true;
        }

        return false;
    }

    // Enhanced message tracking
    function trackMessage(messageContent) {
        const messageId = generateMessageId(messageContent);
        pendingMessages.add(messageId);
        lastMessageContent = messageContent;
        lastMessageTime = Date.now();

        // Remove from pending after debounce period
        setTimeout(() => {
            pendingMessages.delete(messageId);
        }, CONFIG.MESSAGE_SEND_DEBOUNCE);

        // Clear content tracking after longer period
        if (messageSendTimeout) clearTimeout(messageSendTimeout);
        messageSendTimeout = setTimeout(() => {
            lastMessageContent = '';
        }, CONFIG.MESSAGE_SEND_DEBOUNCE);
    }

    function handleFormSubmit(event) {
        const form = event.target;
        const inputField = form.querySelector('input, textarea');
        const messageContent = inputField ? inputField.value.trim() : '';

        console.log("Form submit intercepted:", messageContent);

        if (shouldPreventDuplicate(messageContent)) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            return false;
        }

        trackMessage(messageContent);
    }

    function handleSendButtonClick(event) {
        const inputField = document.querySelector(".woot-input-box input, .woot-input-box textarea, .woot--composer input, .woot--composer textarea");
        const messageContent = inputField ? inputField.value.trim() : '';

        console.log("Send button click intercepted:", messageContent);

        if (shouldPreventDuplicate(messageContent)) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            return false;
        }

        trackMessage(messageContent);
    }

    function handleInputKeydown(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            const messageContent = event.target.value.trim();

            console.log("Enter key intercepted:", messageContent);

            if (shouldPreventDuplicate(messageContent)) {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                return false;
            }

            trackMessage(messageContent);
        }
    }

    // Enhanced cookie clearing
    function clearAllChatwootData() {
        console.log("Clearing all Chatwoot data...");

        // Clear all cookies (more comprehensive)
        const cookies = document.cookie.split(';');
        console.log("Current cookies:", cookies);
        cookies.forEach(cookie => {
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();

            // Clear for all possible domains and paths
            const domains = ['', '.fcmb.com', 'chatwoot.fcmb.com', '.chatwoot.fcmb.com'];
            const paths = ['/', '/api', '/public'];

            domains.forEach(domain => {
                paths.forEach(path => {
                    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path}${domain ? `;domain=${domain}` : ''}`;
                });
            });
        });

        // Clear local storage
        try {
            Object.keys(localStorage).forEach(key => {
                console.log("LocalStorage key:", key);
                if (key.toLowerCase().includes('chatwoot') || key.toLowerCase().includes('cw_')) {
                    localStorage.removeItem(key);
                }
            });
        } catch (e) {
            console.warn("Could not clear localStorage:", e);
        }

        // Clear session storage
        try {
            Object.keys(sessionStorage).forEach(key => {
                console.log("SessionStorage key:", key);
                if (key.toLowerCase().includes('chatwoot') || key.toLowerCase().includes('cw_')) {
                    sessionStorage.removeItem(key);
                }
            });
        } catch (e) {
            console.warn("Could not clear sessionStorage:", e);
        }

        // Reset conversation state
        currentConversationId = null;
        conversationResolved = false;
        pendingMessages.clear();
        lastMessageContent = '';
        lastMessageTime = 0;
    }

    function initializeChatwoot() {
        window.chatwootSettings = {
            type: CONFIG.WIDGET_TYPE,
            launcherTitle: CONFIG.LAUNCHER_TITLE
        };

        const script = document.createElement("script");
        script.src = CONFIG.CHATWOOT_SCRIPT_URL;
        script.defer = true;
        script.async = true;
        script.onload = setupChatwoot;
        script.onerror = () => console.error("Failed to load Chatwoot SDK");
        document.head.appendChild(script);

        window.addEventListener("unload", () => {
            if (script.parentNode) script.parentNode.removeChild(script);
        });
    }

    function setupChatwoot() {
        window.chatwootSDK.run({
            websiteToken: CONFIG.WEBSITE_TOKEN,
            baseUrl: CONFIG.BASE_URL
        });

        window.addEventListener("chatwoot:ready", () => {
            console.log("Chatwoot ready");
            conversationResolved = false;
            addActivityListeners();
            setTimeout(interceptMessageSending, 2000);
        });

        window.addEventListener("chatwoot:on-message", async (event) => {
            const newConversationId = event.detail.conversation_id || event.detail.id || null;
            let message_content = event.detail.content ? .trim() || null;
            const isLastMessage = message_content ? .toLowerCase() === "please rate the conversation";

            if (isLastMessage) {

                if (window.$chatwoot) {
                    window.$chatwoot.reset();
                }

                if (window.indexedDB) {
                    indexedDB.databases().then(dbs => {
                        dbs.forEach(db => {
                            indexedDB.deleteDatabase(db.name);
                            console.log(`✓ Deleted IndexedDB: ${db.name}`);
                        });
                    }).catch(err => console.log('IndexedDB error:', err));
                }

                if ('caches' in window) {
                    caches.keys().then(names => {
                        names.forEach(name => {
                            caches.delete(name);
                        });
                    }).catch(err => console.log('Cache error:', err));
                }

                localStorage.clear();
                sessionStorage.clear();

                ['localStorage', 'sessionStorage'].forEach(storageType => {
                    try {
                        const storage = window[storageType];
                        const keys = Object.keys(storage);
                        keys.forEach(key => {
                            storage.removeItem(key);
                        });
                    } catch (e) {
                        console.log(`Error`);
                    }
                });

                document.cookie.split(';').forEach(cookie => {
                    const name = cookie.split('=')[0].trim();
                    ['.fcmb.com', 'chatwoot.fcmb.com', '.chatwoot.fcmb.com', '', '127.0.0.1', 'localhost'].forEach(domain => {
                        ['/', '/api', '/public'].forEach(path => {
                            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path}${domain ? `;domain=${domain}` : ''}`;
                            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path}${domain ? `;domain=${domain}` : ''};Secure`;
                        });
                    });
                });

                currentConversationId = null;

                setTimeout(() => {
                    window.location.href = window.location.href;
                }, 1500);

                return;
            }


            // Check if this is a new conversation
            if (currentConversationId && currentConversationId !== newConversationId) {
                console.log("New conversation detected, clearing old data");
                clearAllChatwootData();
            }

            currentConversationId = newConversationId;
            console.log("Current conversation ID:", currentConversationId);
            resetInactivityTimer();

            if (currentConversationId) {
                await checkConversationStatus(currentConversationId);
            }
        });

        window.addEventListener("chatwoot:opened", () => {
            console.log("Chatwoot opened");
            conversationResolved = false;
            addActivityListeners();
            resetInactivityTimer();
            setTimeout(interceptMessageSending, 1000);
        });

        window.addEventListener("chatwoot:closed", async () => {
            console.log("Chatwoot closed");
            removeActivityListeners();
            clearTimeouts();
            warningSent = false;
            conversationResolved = true;


            clearAllChatwootData();

            if (currentConversationId) {
                await resolveConversation(currentConversationId);
            }
        });
    }

    // Enhanced conversation status checking
    async function checkConversationStatus(conversationId) {
        try {
            const response = await fetch(`${CONFIG.BASE_URL}/api/v1/accounts/1/conversations/${conversationId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "api_access_token": CONFIG.KONG_FIREWALL
                }
            });

            if (response.ok) {
                const conversation = await response.json();
                console.log("Conversation status:", conversation.status);

                if (conversation.status === "resolved") {
                    console.log(`Conversation ${conversationId} is resolved`);
                    conversationResolved = true;

                    // Force close and reset
                    if (window.$chatwoot) {
                        window.$chatwoot.toggle("close");

                        // Wait a bit then reset to ensure clean state
                        setTimeout(() => {
                            window.$chatwoot.reset();
                            clearAllChatwootData();
                            console.log("Chat widget closed and reset due to resolved conversation.");
                        }, 500);
                    }
                }
            }
        } catch (error) {
            console.error(`Failed to fetch conversation status: ${error}`);
        }
    }

    async function sendWarningMessage(conversationId) {
        if (warningSent) return;

        try {
            const response = await fetch(`${CONFIG.WARNING_API_URL}?apikey=${CONFIG.KONG_FIREWALL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    conversation_id: conversationId
                })
            });

            if (!response.ok) {
                throw new Error(`Failed to send warning. Status: ${response.status}`);
            }

            warningSent = true;
            inactivityTimeout = setTimeout(closeChat, CONFIG.CLOSE_TIMEOUT);
        } catch (error) {
            console.error(error);
        }
    }

    async function closeChat() {
        conversationResolved = true;

        if (window.$chatwoot) {
            window.$chatwoot.toggle("close");

            setTimeout(() => {
                window.$chatwoot.reset();
                clearAllChatwootData();
            }, 500);
        }

        if (currentConversationId) {
            await resolveConversation(currentConversationId);
        }
    }

    async function resolveConversation(conversationId) {
        try {
            const response = await fetch(`${CONFIG.RESOLVE_API_URL}?apikey=${CONFIG.KONG_FIREWALL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    conversation_id: conversationId
                })
            });

            if (!response.ok) {
                throw new Error(`Failed to resolve conversation. Status: ${response.status}`);
            }

            // console.log("Conversation resolved successfully");
        } catch (error) {
            console.error(error);
        }
    }

    function startCountdown(duration) {
        countdownValue = duration / 1000;
        if (countdownInterval) clearInterval(countdownInterval);
        countdownInterval = setInterval(() => {
            countdownValue -= 1;
            if (countdownValue <= 0) {
                clearInterval(countdownInterval);
                countdownInterval = null;
            }
        }, 1000);
    }

    function resetInactivityTimer() {
        if (conversationResolved) return;

        warningSent = false;
        clearTimeouts();
        warningTimeout = setTimeout(() => {
            if (currentConversationId && !warningSent && !conversationResolved) {
                sendWarningMessage(currentConversationId);
            }
        }, CONFIG.INACTIVITY_TIMEOUT);
        startCountdown(CONFIG.INACTIVITY_TIMEOUT);
    }

    function clearTimeouts() {
        if (warningTimeout) {
            clearTimeout(warningTimeout);
            warningTimeout = null;
        }
        if (inactivityTimeout) {
            clearTimeout(inactivityTimeout);
            inactivityTimeout = null;
        }
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
    }

    function addActivityListeners() {
        function findChatContainer() {
            chatContainer = document.querySelector(".woot-widget-holder");
            const chatArea = document.querySelector(".woot--conversation");
            const chatInput = document.querySelector(".woot-input-box");

            if (chatContainer) {
                const events = ["mousemove", "mousedown", "keypress", "touchstart", "click", "scroll"];
                events.forEach((event) => {
                    chatContainer.addEventListener(event, resetInactivityTimer);
                    if (chatArea) chatArea.addEventListener(event, resetInactivityTimer);
                    if (chatInput) chatInput.addEventListener("input", resetInactivityTimer);
                });
            } else {
                setTimeout(findChatContainer, 500);
            }
        }
        findChatContainer();
    }

    function removeActivityListeners() {
        if (chatContainer) {
            const events = ["mousemove", "mousedown", "keypress", "touchstart", "click", "scroll"];
            events.forEach((event) => {
                chatContainer.removeEventListener(event, resetInactivityTimer);
            });

            const chatArea = document.querySelector(".woot--conversation");
            const chatInput = document.querySelector(".woot-input-box");

            if (chatArea) {
                events.forEach(event => chatArea.removeEventListener(event, resetInactivityTimer));
            }

            if (chatInput) {
                chatInput.removeEventListener("input", resetInactivityTimer);
            }
        }
    }

    // Enhanced observer for dynamic elements
    function observeForNewElements() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        // Only add listeners if not already added
                        const newForm = node.querySelector ? node.querySelector('.woot-input-box form, .woot--composer') : null;
                        const newSendButton = node.querySelector ? node.querySelector('.woot--send-button, .woot-send-button') : null;
                        const newInputField = node.querySelector ? node.querySelector('.woot-input-box input, .woot-input-box textarea') : null;

                        if (newForm && !messageListenersAdded.has('form')) {
                            newForm.addEventListener('submit', handleFormSubmit, true);
                            messageListenersAdded.add('form');
                        }

                        if (newSendButton && !messageListenersAdded.has('button')) {
                            newSendButton.addEventListener('click', handleSendButtonClick, true);
                            messageListenersAdded.add('button');
                        }

                        if (newInputField && !messageListenersAdded.has('input')) {
                            newInputField.addEventListener('keydown', handleInputKeydown, true);
                            messageListenersAdded.add('input');
                        }
                    }
                });
            });
        });

        const chatContainer = document.querySelector(".woot-widget-holder");
        if (chatContainer) {
            observer.observe(chatContainer, {
                childList: true,
                subtree: true
            });
        }
    }

    const delayedInit = () => setTimeout(initializeChatwoot, 2000);

    if (document.readyState === "complete" || document.readyState === "interactive") {
        delayedInit();
    } else {
        document.addEventListener("DOMContentLoaded", delayedInit);
    }

    window.addEventListener("unload", () => {
        removeActivityListeners();
        clearTimeouts();
        if (messageSendTimeout) clearTimeout(messageSendTimeout);
        clearAllChatwootData();
    });

})();