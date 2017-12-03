miniSmartTrial.controller('listController', ['$scope', '$routeParams','$location','getdata',function($scope, $routeParams, $location, getdata) { 



$scope.items = ["Building","Production"]
getdata.fetchUserDetails().success(function(response){
       
	//sets Response (data.json) equeal to $scope.data
        $scope.data = response;
    //sets $scope.trialinfo to $scope.data.stuides so taht we have the 3 studys only and not a multi-array    
		$scope.trialinfo = $scope.data.studies


// function to add new study
//works by getting the id,desc,name from NG-models on any form where i call this function
$scope.addStudy = function(){
	// Here it goes a "push" to the data.json array
	$scope.trialinfo.push({
			id: $scope.countids(),
			description: $scope.newstudy.desc,
			name: $scope.newstudy.name,
			status: $scope.Selectednewstudy,
			subjects:[]
		});
		//afterwards sets input fields as empty to reset 
		$scope.newstudy.desc = "";
		$scope.newstudy.name = "";
	};
});

//counts length of $scope.trialinfo to get the id for the next study
$scope.countids = function(){
	var id = 0;
    for(var i = 0; i < $scope.trialinfo.length; i++){
        id = i+1;
    }
    return id;
}


}]); 