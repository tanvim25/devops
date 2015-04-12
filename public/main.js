var app = angular.module("app", []);

app.controller("autoCompleteCtrl", ["$scope", "$http", function($scope, $http){
	$scope.results = [];
	$scope.trie = new Trie();
	$scope.trie.add("Something");
	$scope.trie.add("Nothing");
	$scope.trie.add("Anything");
	$scope.trie.add("The quick brown fox jumped over the lazy dog");
	$scope.trie.add("Lord of the Rings");
	$scope.trie.add("Harry Potter");
	$scope.trie.add("DevOps");
	$scope.trie.add("Google");
	$scope.trie.add("Amazon");
	$scope.trie.add("Sinatra");
	$scope.trie.add("Trance");
	$scope.trie.add("Some more text");
	$scope.$watch('text', function(newVal) {
		if(!newVal || newVal === "")
			return;
		$http.get('/lookup', {params: {q: newVal}}).success(function(data, status, headers, config) {
			$scope.results = data;
		});
	});
	Trie();
}]);