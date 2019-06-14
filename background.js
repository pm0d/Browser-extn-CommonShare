chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.runtime.reload();
	// if (tab.url.toString() == 'http://10.249.110.236/dashboard/') chrome.tabs.reload();
});

chrome.tabs.query({ url: 'http://10.249.110.236/dashboard/*' }, function(tab) {
	chrome.tabs.reload(tab[0].id);
});
