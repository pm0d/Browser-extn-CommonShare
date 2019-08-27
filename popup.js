document.addEventListener(
	'DOMContentLoaded',
	function() {
		var btn = document.getElementById('UNRC');
		btn.addEventListener(
			'click',
			function() {
				chrome.tabs.getSelected(null, function(tab) {
					d = document;
					var f = d.createElement('form');
					f.action = 'http://bing.com';
					f.method = 'post';
					var i = d.createElement('input');
					i.type = 'hidden';
					i.name = 'url';
					i.value = tab.url;
					f.appendChild(i);
					d.body.appendChild(f);
					f.submit();
				});
			},
			false
		);
	},
	false
);
