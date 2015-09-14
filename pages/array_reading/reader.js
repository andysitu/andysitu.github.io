// Record of begin time of script
var t1 = window.performance.now();

for (var i = 0; i < arr.length ; i++) {
	var loc = document.getElementById("here");

	// First portion makes new row after 7 columns by counting with i	
	if (i % 7 == 0) {
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		td.appendChild(document.createTextNode(arr[i]));
		tr.appendChild(td);
		loc.appendChild(tr);

	// Makes new column by appending <td> to <tr>
	} else {
		var td = document.createElement("td");
		td.appendChild(document.createTextNode(arr[i]));
		tr.appendChild(td);
	} 

	// adds an id depeneding on the value from the array with a switch
	// Might be better to use an if clause or another method
	switch (td.innerText) {
		case "0": // 0
			td.id = "none"; break;
		case "1": case "2": case "3": // 1 - 3 (.5 - 1.5)
			td.id = "okay"; break;
		case "4": case "5": case "6": // 4 - 6 (2 - 3)
			td.id = "good"; break;
		case "7": case "8": case "9": // 7-9 (3.5 - 4.5)
			td.id = "great"; break;
		case "10": case "11": case "12": // 10 - 12 (5 - 6)
			td.id = "super"; break;
		case "13": case "14": case "15": // 13 - 15 ( 6.5 - 7.5)
			td.id = "amazing"; break;
		case "16": case "17": case "18": // 16 - 18 (8 - 9)0
			td.id = "duper"; break;
		case "19": case "20": case "21": // 19 - 21 ( 9.5 - 10.5)
			td.id = "superduper"; break;	
		default: break;
	}

}

// End time of the script
t2 = window.performance.now();

// Time it took to run script and then display of the time
time = (t2-t1).toFixed(3) + " milliseconds";
var msg = document.getElementById("msg");
msg.innerHTML = time;