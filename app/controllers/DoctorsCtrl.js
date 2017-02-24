"use strict";

app.controller("DoctorsCtrl", function($scope, DoctorFactory){
	console.log("DOCTORS CONTROL");
	$scope.doctors = [];

	DoctorFactory.getDoctors()
	.then( function(doctors){
		console.log("Doctors: ", doctors);
		$scope.doctors = doctors;
		console.log("$Scope Doctors: ", $scope.doctors);
	});




});