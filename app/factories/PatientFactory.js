"use strict";

app.factory("PatientFactory", ($q, $http, FBCreds) => {
	console.log("PATIENT FACTORY");

	// Get Patients
	
	let getPatients = () => {
		console.log(`${FBCreds.databaseURL}/patients`);
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/patients.json`)
			.then((patientObject) => {
				let parsedObject = angular.fromJson(patientObject);
				let patientArray = Object.values(parsedObject.data);
				let newArray = [];


				Object.keys(patientArray).forEach((key) => {
					patientArray[key].id = key;
					newArray.push(patientArray[key]);
				});

				resolve(newArray);





			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	// GET PATIENT BY ID

	return {getPatients};



});
