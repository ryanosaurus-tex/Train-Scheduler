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
	var firstTrainTime = $("#inputFirstTrainTime"); // ADD MOMENT.JS
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

	var newTrainName = childSnapshot.val().newTrainName;
	var newDestination = childSnapshot.val().newDestination;
	var newFirstTrainTime = childSnapshot.val().newFirstTrainTime;
	var newFrequency = childSnapshot.val().newFrequency;

	console.log(newTrainName);
	console.log(newDestination);
	console.log(newFirstTrainTime);
	console.log(newFrequency);

	$("#trainTable").append("<tr>" +
								"<td>" + newTrainName + "</td>" +
		                        "<td>" + newDestination + "</td>" +
		                        "<td>" + newFirstTrainTime + "</td>" +
		                        "<td>" + newFrequency + "</td>" + 
		                    "</tr>");
});






















/* ------- REFERENCE CODE ----------------------------------
  

// Create an Object Constructor for the Train listings
function trainListing(trainName,destination,firstTrainTime,nextTrainTime,frequency) {
	this.trainName = trainName;
	this.destination = destination;
	this.firstTrainTime = firstTrainTime;
	this.nextTrainTime = nextTrainTime;
	this.frequency = frequency;
}
var database = firebase.database();


function addEmployeeListing(){

      // Grabbed values from text boxes
      name = $("#employeeNameInput").val().trim();
      role = $("#roleInput").val().trim();
      startDate = $("#startDateInput").val().trim();
      monthlyRate = $("#monthlyRateInput").val().trim();

      // Code for handling the push
      database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
        	});
};
*/