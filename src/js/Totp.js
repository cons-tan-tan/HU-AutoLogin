const totpGenerator = require('totp-generator');

selectIfPresent(document.querySelector("#MFALogin > table > tbody > tr:nth-child(1) > td:nth-child(3) > select"), "totp")

chrome.storage.sync.get(["url"], function(result) {
    if (result.url !== undefined) {
        const start = "?secret=";
        const end = "&issuer=";
        let url_after_secret = result.url.substring(result.url.indexOf(start) + start.length);
        const totp = url_after_secret.substring(0, url_after_secret.indexOf(end));
        if (totp !== "") {
            const token = totpGenerator(totp);
            fillIfPresent(document.querySelector("#MFALogin > table > tbody > tr:nth-child(3) > td:nth-child(3) > input[type=text]"), token);

            clickIfPresent(document.querySelector("#MFALogin > input[type=submit]:nth-child(5)"))
        }
    }
});
