//code to make hyperlink the rave case number 
// var casenumber = document.querySelector('#tr_ticket_number > td > p').innerHTML;
// casenumber.trim();
// var caselink = '<a href=https://beta.rave.office.net/search?query=' + casenumber + '>' + casenumber + '</a>';
// document.querySelector('#tr_ticket_number > td > p').innerHTML = caselink;
// console.log(casenumber + ' ' + caselink);

window.onload = function () {
	hideMarquee();
};

var slideIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("flyer1");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > x.length) {
		slideIndex = 1
	}
	x[slideIndex - 1].style.display = "block";
	setTimeout(carousel, 4000); // Change image every 2 seconds
}

function hideMarquee() {
	try {
		document.getElementById('dyna_sidemarquee_content').remove();
	} catch (error) {
		console.log(error)
	}
	// if (document.contains(document.getElementById('dyna_sidemarquee_content'))) {
	// 	document.getElementById('dyna_sidemarquee_content').remove();
	// }
}

let cursor = 0;
const Qtrigger = [81, 81];
document.addEventListener('keydown', (e) => {
	cursor = e.keyCode == Qtrigger[cursor] ? cursor + 1 : 0;
	if (cursor == Qtrigger.length) {
		CaseReview();
	}
});

// Print column from  the table
let cursor2 = 0;
const Ztrigger = [90, 90];
document.addEventListener('keydown', (e) => {
	cursor2 = e.keyCode == Ztrigger[cursor2] ? cursor2 + 1 : 0;
	if (cursor2 == Ztrigger.length) {
		var table = document.getElementById('tb_gt_tlpendingreviews');
		for (var i = 0, row;
			(row = table.rows[i]); i++) {
			{
				let btn = row.getElementsByTagName('button');
				console.log(btn);
				console.log(btn.getAttribute('onclick'));
			}
		}

		var table = document.getElementById('tb_gt_tlpendingreviews');
		for (var i = 0, row;
			(row = table.rows[i]); i++) {
			{
				let btn = row.getElementsByTagName('button');
				console.log(btn[0]);
				console.log(btn[0].getAttribute('value'));
			}
		}
	}
});

document.addEventListener('dblclick', CaseReview);

function CaseReview() {

	allreasons = [
		'Closed',
		'Pending TA or SEE recovery',
		'Pending TM recovery',
		'Reassigned to other team member',
		'Solution delivered - pending confirmation',
		'Transferred to other Team',
		'Action plan provided',
		'Additional logs required',
		'Bug - SI',
		'Customer unresponsive',
		'Escalated to SEE - Above 2 Days',
		'Escalated to SEE - Below 2 Days',
		'Escalated to T2',
		'TA or SEE pending analysis',
		'TRB - under TA or SEE review - Above 2 Days',
		'TRB - under TA or SEE review - Below 2 Days'
	]

	// Set tlinput_status same as seinput_status
	if (
		document.querySelector('input[name=seinput_status][value=Resolved]').checked == true ||
		document.getElementById('seinput_status_reason').value == 'POA shared with customer SDPC'
	) {
		document.querySelector('input[name=tlinput_status][value=Resolved]').checked = true;
		// reasons = [
		// 	'Closed',
		// 	'Solution delivered - Pending confirmation',
		// 	'Pending TM recovery',
		// 	'Reassigned to other team member',
		// 	'Transferred to other team'
		// ];
	} else {
		document.querySelector('input[name=tlinput_status][value=Unresolved]').checked = true;
		// reasons = [
		// 	'Action plan provided',
		// 	'Additional logs required',
		// 	'Bug - SI',
		// 	'Customer unresponsive',
		// 	'TA or SEE pending analysis'
		// ];
	}

	var mySelect = document.getElementById('tlinput_status_reason');
	for (i = 0; i < allreasons.length; i++) {
		var option = document.createElement('option');
		option.text = allreasons[i];
		option.value = allreasons[i];
		mySelect.add(option);
	}

	document.getElementById('tr_tlinput_status_reason').style = ''; //Unhide the dropdown
	if (document.getElementById('tlinput_status_reason').value == '') {
		if (document.getElementById('seinput_status_reason').value == 'BUG or ICM or VSO')
			document.getElementById('tlinput_status_reason').value = 'Bug - SI';

		else if (document.getElementById('seinput_status_reason').value == 'Customer not available - 1 Strike completed')
			document.getElementById('tlinput_status_reason').value = 'Customer unresponsive';

		else if (document.getElementById('seinput_status_reason').value == 'Customer not available - 2 Strikes completed')
			document.getElementById('tlinput_status_reason').value = 'Customer unresponsive';

		else if (document.getElementById('seinput_status_reason').value == 'Customer not available - 3 Strikes completed')
			document.getElementById('tlinput_status_reason').value = 'Customer unresponsive';

		else if (document.getElementById('seinput_status_reason').value == 'Data Analysis Pending - TL or T2 Involved')
			document.getElementById('tlinput_status_reason').value = 'Action plan provided';

		else if (document.getElementById('seinput_status_reason').value == 'Data Collection Pending - Above 2 Days')
			document.getElementById('tlinput_status_reason').value = 'Additional logs required';

		else if (document.getElementById('seinput_status_reason').value == 'Data Collection Pending - Below 2 Days')
			document.getElementById('tlinput_status_reason').value = 'Additional logs required';

		else if (document.getElementById('seinput_status_reason').value == 'End User not available - 3 Strikes completed')
			document.getElementById('tlinput_status_reason').value = 'Customer unresponsive';

		else if (document.getElementById('seinput_status_reason').value == 'Escalated to SEE')
			document.getElementById('tlinput_status_reason').value = 'TA or SEE pending analysis';

		else if (document.getElementById('seinput_status_reason').value == 'Escalated to T2')
			document.getElementById('tlinput_status_reason').value = 'Escalated to T2';

		else if (document.getElementById('seinput_status_reason').value == 'Monitoring Issue – Solution provided') ///////
			document.getElementById('tlinput_status_reason').value = 'Solution delivered - pending confirmation';

		else if (document.getElementById('seinput_status_reason').value == 'POA shared with customer SDPC') ///////
			document.getElementById('tlinput_status_reason').value = 'Solution delivered - pending confirmation';

		else if (document.getElementById('seinput_status_reason').value == 'Waiting on MSSOLVE Case') //////
			document.getElementById('tlinput_status_reason').value = 'Transferred to other Team';

		else if (document.getElementById('seinput_status_reason').value == 'Ongoing Troubleshooting')
			document.getElementById('tlinput_status_reason').value = 'Action plan provided';

		else if (document.getElementById('seinput_status_reason').value == 'Pending on Collaboration - TA or SEE Not involved')
			document.getElementById('tlinput_status_reason').value = 'TA or SEE pending analysis';

		else if (document.getElementById('seinput_status_reason').value == 'SIE - Outage')
			document.getElementById('tlinput_status_reason').value = 'Bug - SI';

		else if (document.getElementById('seinput_status_reason').value == 'TA or SEE Pending Analysis - Above 2 Days')
			document.getElementById('tlinput_status_reason').value = 'TA or SEE pending analysis';

		else if (document.getElementById('seinput_status_reason').value == 'TA or SEE Pending Analysis - Below 2 Days')
			document.getElementById('tlinput_status_reason').value = 'TA or SEE pending analysis';

		else if (document.getElementById('seinput_status_reason').value == 'TRB - under TA or SEE review - Above 2 Days')
			document.getElementById('tlinput_status_reason').value = 'TA or SEE pending analysis';

		else if (document.getElementById('seinput_status_reason').value == 'TRB - under TA or SEE review - Below 2 Days')
			document.getElementById('tlinput_status_reason').value = 'TA or SEE pending analysis';

		else if (document.getElementById('seinput_status_reason').value == 'TRB - under TL or SE2 review')
			document.getElementById('tlinput_status_reason').value = 'Action plan provided';

		else if (document.getElementById('seinput_status_reason').value == 'Closed') {
			document.getElementById('tlinput_status_reason').value = 'Closed';
			document.getElementById('tl_comments').value = 'Closed';
		} else if (document.getElementById('seinput_status_reason').value == 'Customer asked Monitoring - Above 2 Days') {
			document.getElementById('tlinput_status_reason').value = 'Solution delivered - pending confirmation';
			document.getElementById('tl_comments').value = 'Monitoring';
		} else if (document.getElementById('seinput_status_reason').value == 'Customer asked Monitoring - Below 2 Days')
			document.getElementById('tlinput_status_reason').value = 'Solution delivered - pending confirmation';

		else if (document.getElementById('seinput_status_reason').value == 'Customer not available - 3 Strikes completed') /////
			document.getElementById('tlinput_status_reason').value = 'Customer unresponsive';

		else if (document.getElementById('seinput_status_reason').value == 'Pending T2 recovery') ///
			document.getElementById('tlinput_status_reason').value = 'Escalated to T2';

		else if (document.getElementById('seinput_status_reason').value == 'Pending TA or SEE recovery')
			document.getElementById('tlinput_status_reason').value = 'Pending TA or SEE recovery';

		else if (document.getElementById('seinput_status_reason').value == 'Pending TL recovery')
			document.getElementById('tlinput_status_reason').value = 'Pending TM recovery';

		else if (document.getElementById('seinput_status_reason').value == 'Pending TM recovery')
			document.getElementById('tlinput_status_reason').value = 'Pending TM recovery';

		else if (document.getElementById('seinput_status_reason').value == 'Proactive Monitoring - Above 2 Days')
			document.getElementById('tlinput_status_reason').value = 'Solution delivered - pending confirmation';

		else if (document.getElementById('seinput_status_reason').value == 'Proactive Monitoring - Below 2 Days')
			document.getElementById('tlinput_status_reason').value = 'Solution delivered - pending confirmation';

		else if (document.getElementById('seinput_status_reason').value == 'Reassigned to other Team Member')
			document.getElementById('tlinput_status_reason').value = 'Reassigned to other team member';

		else if (document.getElementById('seinput_status_reason').value == 'Transferred to other Team')
			document.getElementById('tlinput_status_reason').value = 'Transferred to other Team';

		else if (document.getElementById('seinput_status_reason').value == 'Waiting for Customer confirmation - Above 2 Days') {
			document.getElementById('tlinput_status_reason').value = 'Solution delivered - pending confirmation';
			document.getElementById('tl_comments').value = 'WOCT';
		} else if (document.getElementById('seinput_status_reason').value == 'Waiting for Customer confirmation - Below 2 Days') {
			document.getElementById('tlinput_status_reason').value = 'Solution delivered - pending confirmation';
			document.getElementById('tl_comments').value = 'WOCT';
		} else if (document.getElementById('seinput_status_reason').value == 'Waiting for TAM confirmation')
			document.getElementById('tlinput_status_reason').value = 'Solution delivered - pending confirmation';
	}


	// If owner_comments field is blank,then enter placeholder value else copy the owner_comments value to tl_comments
	if (document.getElementById('owner_comments').value == '')
		document.getElementById('owner_comments').value = 'SE to update this field';
	// if TL comments blank, then copy from SE comments 
	// else if (document.getElementById('tl_comments').value == '') 
	document.getElementById('tl_comments').value = document.getElementById('owner_comments').value;

	//set perception to 3 star
	document.querySelector('input[name=tl_perception][value="3 Star"]').checked = true;

	//  Set need help to false
	document.querySelector('input[id=need_help][value="no"]').checked = true;

	// if (document.getElementById('d1').value != 'SPO')
	if (document.querySelector('input[name=d1][value="SPO"]').checked == '')
		document.querySelector('input[name=d1][value="Helpshift"]').checked = true; //set product to SPO 

	// document.getElementById('d2').value = 'SELECT';
	// document.getElementById('tlinput_status_reason').value = 'Reviewed';
	document.getElementById('tlinput_workflow_to').value == '';
	document.querySelector('input[value="Submit"]').click();
}

chrome.runtime.onMessage.addListener(function (message) {
	CaseReview();
	console.log("inside main.js");
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	CaseReview();
	console.log("inside main.js");
	console.log(request.args);
	sendResponse();
});
