miniSmartTrial.controller('detailController', ['$scope', '$routeParams','$location','getdata',function($scope, $routeParams, $location, getdata) { 


$scope.items = ["Building","Production"]

//gets the full URL of the page
var absUrl  = $location.absUrl();
//sets id as the ID in my url
var id = $routeParams.id;
//converts id to $scope.id to use it only in this scope
$scope.id = id;

getdata.fetchUserDetails().success(function(response){

	//sets  $scope.data equeal to Response (data.json) but the id is the key
	//short term it gets only 1 study, the study where [key] = id
        $scope.data = response.studies[id];
    //sets $scope.trialinfo to $scope.data.stuides so that we have the 3 studys only and not a multi-array    
        $scope.trialinfo = $scope.data;

//adds new subject to the list of subjects
//adds time (var date) and a name, date is set to current time where name is a input field
$scope.addSubject = function(){
    var date = new Date();
  $scope.trialinfo.subjects.push({
      name: $scope.newsubject.name,
      created: date,
    });
    $scope.newsubject.name = "";
};
//Suppose to edit study but never got this working fully as inteded,
//its suppose to go off the logic of addStudy in Listcontroller, mistake not yet found
//subject not updating as the only thing.
$scope.editStudy = function(){
  $scope.trialinfo[id].push({
      description: $scope.trialinfo.desc,
      name: $scope.trialinfo.name,
      status: $scope.trialinfo.status,
      subjects:[]
    });
};
//sets data in ng-models to the value of $scope.trial
$scope.editCrib = function(study){
  $scope.editListing = true;
  $scope.existingListing = $scope.trialinfo;
}
});
$scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.trialinfo.subjects.length; i++){
        total = i+1;
    }
    return total;
}


}]); 