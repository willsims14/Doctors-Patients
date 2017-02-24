"use strict";


var app = angular.module("MyApp", ["ngRoute"]);


// When a URL looks a particular way, we want a specific controller to take control
app.config(function($routeProvider){
    $routeProvider.
    when('/patients', {
        templateUrl: 'partials/view-patients.html',
        controller: 'PatientsCtrl'
    }).
    when('/doctors', {
    	templateUrl: 'partials/view-doctors.html',
    	controller: 'DoctorsCtrl'
    }).
    when('/doctors/:id', {
        templateUrl: 'partials/view-patients.html',
        controller: 'PatientsCtrl'
    });
});


app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };

    firebase.initializeApp(authConfig);
});