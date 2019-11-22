// On window load
window.onload = function () {
	// click on Pending reviews
	$("#gt_tlpendingreviews").click();
};

// Need to write code to map shortcuts for specific scenarios like RTCL/SDPC/BUG

// Call CaseReview on doubleclick event
//// document.addEventListener('dblclick', CaseReview);

// Defining shortcut key for calling CaseReview
var cursor = 0;
const Qtrigger = [81, 81];
document.addEventListener("keydown", e => {
	cursor = e.keyCode == Qtrigger[cursor] ? cursor + 1 : 0;
	if (cursor == Qtrigger.length) {
		CaseReview();
	}
});

// function to loop through each case
function LoopCaseReview() {
	// count cases
	var casecount = document.querySelector("#tb_gt_tlpendingreviews > tbody")
		.childElementCount;
	console.log("Total cases on page: " + casecount);
	btn = $("#tb_gt_tlpendingreviews > tbody > tr > td > button");
	btn[0].click();
	// start loop
	var counter = 1;
	var looper = setInterval(function () {
		if (counter > casecount) {
			clearInterval(looper);
		} else {
			console.log("Case counter: " + counter);
			try {
				btn = $("#tb_gt_tlpendingreviews > tbody > tr > td > button");
				btn[0].click();
			} catch (error) { }
			setTimeout(function () {
				CaseReview();
			}, 3000);
		}
		counter++;
	}, 11000);
}

// function to submit the case review
function CaseReview() {
	// list of status reasons
	var allReasons = [
		"Closed",
		"Pending TA or SEE recovery",
		"Pending TM recovery",
		"Reassigned to other team member",
		"Solution delivered - pending confirmation",
		"Transferred to other Team",
		"Action plan provided",
		"Additional logs required",
		"Bug - SI",
		"Customer unresponsive",
		"Escalated to SEE - Above 2 Days",
		"Escalated to SEE - Below 2 Days",
		"Escalated to T2",
		"TA or SEE pending analysis",
		"TRB - under TA or SEE review - Above 2 Days",
		"TRB - under TA or SEE review - Below 2 Days"
	];

	var SE_status = document.getElementById("seinput_status_reason");
	var TL_comments = document.getElementById("tl_comments");
	var TL_status = document.getElementById("tlinput_status_reason");

	// Set tlinput_status same as seinput_status
	if (document.querySelector("input[name=seinput_status][value=Resolved]").checked == true) //|| SE_status.value == "POA shared with customer SDPC"	
	{
		document.querySelector("input[name=tlinput_status][value=Resolved]").checked = true;
	} else {
		document.querySelector("input[name=tlinput_status][value=Unresolved]").checked = true;
	}

	// populate the reasons in dropdown
	var TL_status_reason = document.getElementById("tlinput_status_reason");
	for (i = 0; i < allReasons.length; i++) {
		var option = document.createElement("option");
		option.text = allReasons[i];
		option.value = allReasons[i];
		TL_status_reason.add(option);
	}

	//Unhide the dropdown
	document.getElementById("tr_tlinput_status_reason").style = "";

	//// if (TL_status.value == '') { } // Removed if-loop for testing on 25th Sep

	// Lots of if-else conditions and actions to fill the case review form
	if (SE_status.value == "BUG or ICM or VSO") {
		TL_status.value = "Bug - SI";
		TL_comments.value = "Bug";
	} else if (SE_status.value == "Customer not available - 1 Strike completed") {
		TL_status.value = "Customer unresponsive";
		TL_comments.value = "UNRC1X / Engage TAM";
	} else if (SE_status.value == "Customer not available - 2 Strikes completed") {
		TL_status.value = "Customer unresponsive";
		TL_comments.value = "UNRC2X / Engage TAM";
	} else if (SE_status.value == "Customer not available - 3 Strikes completed") {
		TL_status.value = "Customer unresponsive";
		TL_comments.value = "UNRC3X / Close case";
	} else if (SE_status.value == "Data Analysis Pending - TL or T2 Involved") {
		TL_status.value = "Additional logs required";
		TL_comments.value = "Check with T2/TL";
	} else if (SE_status.value == "Data Collection Pending - Above 2 Days") {
		TL_status.value = "Additional logs required";
		TL_comments.value = "Data collection still pending";
	} else if (SE_status.value == "Data Collection Pending - Below 2 Days") {
		TL_status.value = "Additional logs required";
		TL_comments.value = "Data collection pending";
	} else if (SE_status.value == "End User not available - 3 Strikes completed") {
		TL_status.value = "Customer unresponsive";
		TL_comments.value = "End user unavailable 3X";
	} else if (SE_status.value == "Escalated to SEE") {
		TL_status.value = "TA or SEE pending analysis";
		TL_comments.value = "Pending TA/SEE. Need to check for update";
	} else if (SE_status.value == "Escalated to T2") {
		TL_status.value = "Escalated to T2";
		TL_comments.value = "T2 engaged. Check for update";
	} else if (SE_status.value == "Monitoring Issue – Solution provided") {//?
		TL_status.value = "Solution delivered - pending confirmation";
		TL_comments.value = "SDPC";
	} else if (SE_status.value == "POA shared with customer SDPC") {//?
		TL_status.value = "Solution delivered - pending confirmation";
		TL_comments.value = "SDPC";
	} else if (SE_status.value == "Waiting on MSSOLVE Case") {//?
		TL_status.value = "Transferred to other Team";
		TL_comments.value = "Transferred to other team";
	} else if (SE_status.value == "Ongoing Troubleshooting") {
		TL_status.value = "Additional logs required";
		TL_comments.value = "Ongoing troubleshooting";
	} else if (SE_status.value == "Pending on Collaboration - TA or SEE Not involved") {
		TL_status.value = "TA or SEE pending analysis";
		TL_comments.value = "Pending TA/SEE. Need to check for update";
	} else if (SE_status.value == "SIE - Outage") {
		TL_status.value = "Bug - SI";
		TL_comments.value = "SIE";
	} else if (SE_status.value == "TA or SEE Pending Analysis - Above 2 Days") {
		TL_status.value = "TA or SEE pending analysis";
		TL_comments.value = "Pending TA/SEE. Need to check for update";
	} else if (SE_status.value == "TA or SEE Pending Analysis - Below 2 Days") {
		TL_status.value = "TA or SEE pending analysis";
		TL_comments.value = "Pending TA/SEE. Need to check for update";
	} else if (SE_status.value == "TRB - under TA or SEE review - Above 2 Days") {
		TL_status.value = "TA or SEE pending analysis";
		TL_comments.value = "Pending TA/SEE. Need to check for update";
	} else if (SE_status.value == "TRB - under TA or SEE review - Below 2 Days") {
		TL_status.value = "TA or SEE pending analysis";
		TL_comments.value = "Pending TA/SEE. Need to check for update";
	} else if (SE_status.value == "TRB - under TL or SE2 review") {
		TL_status.value = "Additional logs required";
		TL_comments.value = "Check with T2/TL";
	} else if (SE_status.value == "Closed") {
		TL_status.value = "Closed";
		TL_comments.value = "RTCL";
	} else if (SE_status.value == "Customer asked Monitoring - Above 2 Days") {
		TL_status.value = "Solution delivered - pending confirmation";
		TL_comments.value = "Case on monitoring";
	} else if (SE_status.value == "Customer asked Monitoring - Below 2 Days") {
		TL_status.value = "Solution delivered - pending confirmation";
		TL_comments.value = "Monitoring. Follow up with cx.";
	} else if (SE_status.value == "Customer not available - 3 Strikes completed") {//?
		TL_status.value = "Customer unresponsive";
		TL_comments.value = "UNRC 3X. Close the case.";
	} else if (SE_status.value == "Pending T2 recovery") {//?
		TL_status.value = "Escalated to T2";
		TL_comments.value = "T2 engaged";
	} else if (SE_status.value == "Pending TA or SEE recovery") {
		TL_status.value = "Pending TA or SEE recovery";
		TL_comments.value = "Pending recovery";
	} else if (SE_status.value == "Pending TL recovery") {
		TL_status.value = "Pending TM recovery";
		TL_comments.value = "Pending recovery";
	} else if (SE_status.value == "Pending TM recovery") {
		TL_status.value = "Pending TM recovery";
		TL_comments.value = "Pending TM recovery";
	} else if (SE_status.value == "Proactive Monitoring - Above 2 Days") {
		TL_status.value = "Solution delivered - pending confirmation";
		TL_comments.value = "SDPC / Monitoring. Follow up with cx";
	} else if (SE_status.value == "Proactive Monitoring - Below 2 Days") {
		TL_status.value = "Solution delivered - pending confirmation";
		TL_comments.value = "SDPC";
	} else if (SE_status.value == "Reassigned to other Team Member") {
		TL_status.value = "Reassigned to other team member";
		TL_comments.value = "Reassigned";
	} else if (SE_status.value == "Transferred to other Team") {
		TL_status.value = "Transferred to other Team";
		TL_comments.value = "Transferred";
	} else if (SE_status.value == "Waiting for Customer confirmation - Above 2 Days") {
		TL_status.value = "Solution delivered - pending confirmation";
		TL_comments.value = "WOCT / SDPC";
	} else if (SE_status.value == "Waiting for Customer confirmation - Below 2 Days") {
		TL_status.value = "Solution delivered - pending confirmation";
		TL_comments.value = "WOCT / SDPC";
	} else if (SE_status.value == "Waiting for TAM confirmation") {
		TL_status.value = "Solution delivered - pending confirmation";
		TL_comments.value = "Pending TAM";
	}

	// If owner_comments field is blank,then enter placeholder value else copy the owner_comments value to tl_comments
	if (document.getElementById("owner_comments").value == "")
		document.getElementById("owner_comments").value = "SE to update this field";
	// else if TL comments blank, then copy from SE comments
	else if (TL_comments.value == "")
		TL_comments.value = document.getElementById("owner_comments").value;

	// Set perception to 3 star
	document.querySelector('input[name=tl_perception][value="3 Star"]').checked = true;

	// Set need-help to false
	document.querySelector('#need_help[value="no"]').checked = true;

	// if product is not set to SPO or Yammer, set it to Helpshift
	if (document.querySelector('#d1[value="SPO"]').checked != true && document.querySelector('#d1[value="Yammer Forum"]').checked != true)
		document.querySelector('input[name=d1][value="Helpshift"]').checked = true;

	// Set TLinput_workflow_to as blank
	document.getElementById("tlinput_workflow_to").value == "";

	//Submit the form
	document.querySelector('input[value="Submit"]').click();

	// Create hyperlink for the ticket number
	var ticketnumber = document.querySelector("#tr_ticket_number > td > p").innerText;
	var mylink1 = "https://beta.rave.office.net/search?query=" + ticketnumber;
	var mylink2 = "<a href=" + mylink1 + " target='_blank'>" + ticketnumber + "</a>";
	document.querySelector("#tr_ticket_number > td > p").innerHTML = mylink2;
}

// Add listener from background script
chrome.runtime.onMessage.addListener(onMsg);

// function called on message receipt
function onMsg(request) {
	console.log(request + " triggered");
	if (request == "auto-case-review" || request == "ctx-menu-auto-review") {
		LoopCaseReview();
	} else console.log("Received unknown message.");
}
