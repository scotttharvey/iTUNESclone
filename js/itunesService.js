angular.module('itunes').service('itunesService', function($http, $q){
  this.findIt = function(artist){
    var deferred = $q.defer();
      $http({
      method: "JSONP",
      url: "https://itunes.apple.com/search?term=" + artist + '&callback=JSON_CALLBACK',
    }).then(function(response){
      var data = response.data.results;
      deferred.resolve(data);
    })
      return deferred.promise;
}




  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in.
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here

});
