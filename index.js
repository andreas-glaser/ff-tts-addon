var tabs = require("sdk/tabs");
var contextMenu = require("sdk/context-menu");
var menuItem = contextMenu.Item({
    label: "Text to Speech",
    context: contextMenu.SelectionContext(),
    contentScript: 'self.on("click", function () {' +
    '  var text = window.getSelection().toString();' +
    '  self.postMessage(text);' +
    '});',
    onMessage: function (selectionText) {
        tabs.open('https://api.naturalreaders.com/v0/tts/?src=pw&r=2&s=0&t=' + decodeURIComponent(selectionText));
    }
});