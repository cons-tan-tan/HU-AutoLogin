function setSyncData() {
    chrome.storage.sync.set({"id": document.getElementById("id").value}, function() {
        chrome.storage.sync.set({"password": document.getElementById("password").value}, function() {
            chrome.storage.sync.set({"url": document.getElementById("url").value}, function() {
                alert("保存しました");
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.sync.get(["id"], function(result) {
        if (result.id != null) {
            document.getElementById("id").value = result.id;
        }
    });
    chrome.storage.sync.get(["password"], function(result) {
        if (result.password != null) {
            document.getElementById("password").value = result.password;
        }
    });
    chrome.storage.sync.get(["url"], function(result) {
        if (result.url != null) {
            document.getElementById("url").value = result.url;
        }
    });

    document.getElementById("save").addEventListener("click", function() {
        setSyncData();
    });
});