chrome.runtime.onMessage.addListener((request, sender, res) => {
    chrome.tabs.remove(sender.tab.id);
    res();
    return true;
});
