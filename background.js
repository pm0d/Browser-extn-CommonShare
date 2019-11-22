console.log('eXTENSION starts!');

function ReloadCommonShare() {
	chrome.runtime.reload();
	// Reload the tab
	chrome.tabs.query({
		url: 'http://10.249.110.236/dashboard/*'
	}, function (tab) {
		chrome.tabs.reload(tab[0].id);
	});
}

chrome.contextMenus.create({
	title: 'Reload SIM',
	contexts: ['page'],
	onclick: ReloadCommonShare
});

// chrome.browserAction.onClicked.addListener(function (tab) {
// 	ReloadCommonShare();
// });

chrome.commands.onCommand.addListener(function (command, tab) {
	// Shortcut is triggered.
	if (command === "case-review-shortcut") {
		console.log('Command:', command);
		chrome.tabs.sendMessage(tab.id, {
			myMsg: 'Shortcut pressed'
		}, function (response) {
			// ...
			console.log("Got a response!")
		});
	}
});
