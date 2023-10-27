clickIfPresent(document.querySelector("#donotcache"));
chrome.storage.sync.get(["id"], function(result) {
    if (result.id === undefined || result.id === "") {
        alert("広大IDが設定されていません");
    } else {
        fillIfPresent(document.querySelector("#username"), result.id);

        chrome.storage.sync.get(["password"], function(result) {
            if (result.password === undefined || result.password === "") {
                alert("パスワードが設定されていません");
            } else {
                fillIfPresent(document.querySelector("#password"), result.password);

                clickIfPresent(document.querySelector("body > div > div > div > div.column.one > form > div:nth-child(7) > button"));
                clickIfPresent(document.querySelector("body > div > div > div > div.column.one > form > div:nth-child(8) > button"));
            }
        });
    }
});

