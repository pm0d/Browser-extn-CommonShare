chrome.tabs.query({
	url: "http://10.249.110.236/dashboard/*"
},
	function (tab) {
		try {
			chrome.tabs.reload(tab[0].id);
		} catch(error){}
	}
);

chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.runtime.reload();
});

chrome.contextMenus.create({
	title: "Start auto-review",
	contexts: ["page"],
	documentUrlPatterns: ["http://10.249.110.236/dashboard/*"],
	onclick: autoreview
});

// Command or Shortcut key
chrome.commands.onCommand.addListener(onCmd);

function onCmd(command) {
	console.log("Command:", command);
	chrome.tabs.query({
		url: "http://10.249.110.236/dashboard/*"
	},
		function (tab) {
			chrome.tabs.sendMessage(tab[0].id, command);
		}
	);
};

function autoreview() {
	chrome.tabs.query({
		url: "http://10.249.110.236/dashboard/*"
	},
		function (tab) {
			chrome.tabs.sendMessage(tab[0].id, "ctx-menu-auto-review");
		}
	);
};