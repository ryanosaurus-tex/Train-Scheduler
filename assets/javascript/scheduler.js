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



/* ------- REFERENCE CODE ----------------------------------


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDmnPhQq0tnQMcRDtvcClCNUp_oEWac-S8",
    authDomain: "employees-4f515.firebaseapp.com",
    databaseURL: "https://employees-4f515.firebaseio.com",
    projectId: "employees-4f515",
    storageBucket: "",
    messagingSenderId: "69721115698"
  };
firebase.initializeApp(config);

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