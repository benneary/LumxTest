angular.module('pcmApp', ['lumx'])
.controller("mainController", function($scope){

$scope.people = [
    { name: 'Adam',      email: 'adam@email.com',      age: 10 },
    { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
    { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
    { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
    { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
    { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
    { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
    { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
];

$scope.selectAttend = [
	{ status: 'Attended'},
	{ status: 'Absent' },
	{ status: 'Allowed Cut' }

]

$scope.selectSections = {
    'Sub header 1': [
        { uid: '1', name: 'Adam' },
        { uid: '2', name: 'Amalie' },
        { uid: '3', name: 'Wladimir' },
        { uid: '4', name: 'Samantha' }
    ],
    '<i class="mdi mdi-android"></i> Sub header 2': [
        { uid: '5', name: 'Estefanía' },
        { uid: '6', name: 'Natasha' },
        { uid: '7', name: 'Nicole' }
    ]
};


});