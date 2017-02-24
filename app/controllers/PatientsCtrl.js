"use strict";

app.controller("PatientsCtrl", function($scope, $routeParams, PatientFactory){
	$scope.patients = [];
	let params = $routeParams;
	let myPatients = [];

	console.log("$Params: ", params);

	PatientFactory.getPatients()
		.then( function(patients){
			$scope.patients = [];
			myPatients = patients;
		})
		.then( function(){
			console.log("Params: ", params);
			console.log("myPatients: ", myPatients);
			if(jQuery.isEmptyObject(params)){
				$scope.patients = myPatients;
			}else{
				console.log("Size: ", Object.keys(myPatients).length);
				for(var i = 0; i < Object.keys(myPatients).length; i++){
					if((myPatients[i].doctor_id).toLowerCase() === params.id){
						$scope.patients.push(myPatients[i]);
						$("#patient-headline").html("Dr. " + myPatients[i].doctor_id + "'s Patients");
					}
				}
			}
		});

});