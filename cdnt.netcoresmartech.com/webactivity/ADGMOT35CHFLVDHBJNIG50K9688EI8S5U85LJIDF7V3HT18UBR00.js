var configuration_map = {
    "notificationRuleList": [{
        "whomTo": {
            "visitor": "all",
            "visitor_type": "all",
            "targetRule": "all",
            "activity": {
                "targetRule": "all",
                "restrictToSession": 0,
                "rules": []
            },
            "device": ["mobile", "tablet"],
            "browser": ["firefox", "chrome", "safari"],
            "deviceSelection": "specific",
            "loc": []
        },
        "whereTo": {
            "pageRuleCode": {
                "targetRule": "all",
                "rules": [{
                    "operator": "equalTo",
                    "value": "https:\/\/www.fcmb.com\/business-ways-to-bank"
                }]
            }
        },
        "whenTo": {
            "targetRule": "all",
            "visitAWebsite": true
        },
        "predictiveaction": [],
        "notificationId": "ODE5ODctMw==",
        "startDate": 1628180099,
        "endDate": 1924847124,
        "spa": 0,
        "delay_dismiss": "0",
        "freq_cap": null,
        "skip": true,
        "running": true,
        "type": "3",
        "siteId": ["09f3b1f918b1225457321130a4845c42"],
        "cg": 0,
        "t_type": "0",
        "recoType": null
    }],
    "bpnRuleList": [{
        "optInType": "single",
        "optInRule": "all",
        "notificationId": "ODE5ODcwOWYzYjFmOTE4YjEyMjU0NTczMjExMzBhNDg0NWM0Mg==",
        "whereTo": {
            "pageRuleCode": {
                "targetRule": "all",
                "rules": [{
                    "operator": "contains",
                    "value": "https:\/\/www.fcmb.com\/"
                }]
            }
        },
        "whenTo": {
            "scrollPercent": 1,
            "timeOnSite": 1
        }
    }, {
        "optInType": "single",
        "optInRule": "all",
        "notificationId": "ODE5ODdiNmU2N2RlOTYzNWQxYzgwZDA4Yjk2NmJjNTUzYzg0ZA==",
        "whereTo": {
            "pageRuleCode": {
                "targetRule": "all",
                "rules": [{
                    "operator": "contains",
                    "value": "https:\/\/flexxzone.fcmb.com\/"
                }]
            }
        },
        "whenTo": []
    }],
    "config": {
        "enableNotification": true,
        "enableBpn": true
    }
};