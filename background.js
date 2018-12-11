// create a context menu
browser.contextMenus.create({
    id: "ftu",
    title: "Seacrh on freetutorials",
    contexts: ["selection"]
});

//add action listener to the context menu
browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab) {
    const url = "https://www.freetutorials.eu/?s="+info.selectionText;
    browser.tabs.create({url: url});
}