// clickIfPresent(document.querySelector("#donotcache"));

let flag = true;
chrome.storage.sync.get(["id"], function(result) {
    if (result.id === undefined) {
        alert("cannot get id")
    } else {
        fillIfPresent(document.querySelector("#username"), result.id);

        chrome.storage.sync.get(["password"], function(result) {
            if (result.password === undefined) {
                alert("cannot get password")
            } else {
                fillIfPresent(document.querySelector("#password"), result.password);

                clickIfPresent(document.querySelector("body > div > div > div > div.column.one > form > div:nth-child(7) > button"));
                clickIfPresent(document.querySelector("body > div > div > div > div.column.one > form > div:nth-child(8) > button"));
            }
        });
    }
});

