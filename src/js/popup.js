function setSyncData() {
    const id = document.getElementById("id").value;
    if (id !== "") {
        chrome.storage.sync.set({"id": id});
    }
    const password = document.getElementById("password").value
    if (password !== "") {
        chrome.storage.sync.set({"password": password});
    }
    let url = document.getElementById("url").value;
    if (url !== "") {
        chrome.storage.sync.set({"url": url});
    }
}

document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.sync.get(["id"], function(result) {
        document.getElementById("id").value = result.id;
    });
    chrome.storage.sync.get(["password"], function(result) {
        document.getElementById("password").value = result.password;
    });
    chrome.storage.sync.get(["url"], function(result) {
        document.getElementById("url").value = result.url;
    });
    document.getElementById("save").addEventListener("click", function() {
        setSyncData();
    });
});