"use strict";

app.factory("DoctorFactory", ($q, $http, FBCreds) => {
	console.log("DOCTOR FACTORY");

	// Get Doctors
	

	let getDoctors = () => {
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/doctors.json`)
			.then((doctorObject) => {
				let parsedObject = angular.fromJson(doctorObject);
				let doctorsArray = Object.values(parsedObject.data);
				let newArray = [];

				Object.keys(doctorsArray).forEach((key) => {
					doctorsArray[key].id = key;
					newArray.push(doctorsArray[key]);
				});

				resolve(newArray);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	let getDoctor = (doctorId) => {
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/doctors.json`)
			.then((doctorObject) => {
				let parsedObject = angular.fromJson(doctorObject);
				let doctorsArray = Object.values(parsedObject.data);
				let newArray = [];

				for(var i = 0; i < doctorsArray.length; i++){
					if(doctorsArray[i].last_name === doctorId){
						console.log("MATCHED: ", doctorsArray[i].last_name);
						newArray.push(doctorsArray[i]);
					}
				}

				resolve(newArray);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	return {getDoctors, getDoctor};

});