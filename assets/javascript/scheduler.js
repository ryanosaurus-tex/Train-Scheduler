 // Initialize Firebase
var config = {
  apiKey: "AIzaSyAUlH7bq1EM7kkX9kEQsn_8nnBkUehPo0Q",
  authDomain: "train-scheduler-774ac.firebaseapp.com",
  databaseURL: "https://train-scheduler-774ac.firebaseio.com",
  projectId: "train-scheduler-774ac",
  storageBucket: "train-scheduler-774ac.appspot.com",
  messagingSenderId: "188867108749"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#submitButton").on("click", function(event) {
	event.preventDefault();

	var trainName = $("#inputTrainName").val().trim();
	var destination = $("#inputDestination").val().trim();
	var firstTrainTime = moment($("#inputFirstTrainTime"), "HH:MM" );
	var frequency = $("#inputFrequency").val().trim();

	var newTrain = {
		newTrainName: trainName,
		newDestination: destination,
		newFirstTrainTime: firstTrainTime,
		newFrequency: frequency
	};

	database.ref().push(newTrain);

	console.log(newTrain.newTrainName);
	console.log(newTrain.newDestination);
	console.log(newTrain.newFirstTrainTime);
	console.log(newTrain.newFrequency);

	$("#inputTrainName").val("");
	$("#inputDestination").val("");
	$("#inputFirstTrainTime").val("");
	$("#inputFrequency").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	console.log(childSnapshot.val());

	var currTrainName = childSnapshot.val().newTrainName;
	var currDestination = childSnapshot.val().newDestination;
	var currFirstTrainTime = childSnapshot.val().newFirstTrainTime;
	var currFrequency = childSnapshot.val().newFrequency;

	console.log(newTrainName);
	console.log(newDestination);
	console.log(newFirstTrainTime);
	console.log(newFrequency);

	$("#trainTable").append("<tr>" +
								"<td>" + currTrainName + "</td>" +
		                        "<td>" + currDestination + "</td>" +
		                        "<td>" + currFirstTrainTime + "</td>" +
		                        "<td>" + currFrequency + "</td>" + 
		                    "</tr>");
});