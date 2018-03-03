(function () {

    angular.module('app')
        .controller('addBookCtrl', addBookCtrl);

    function addBookCtrl($scope, $http) {
         $scope.addBook = (book) => {
            $http({
                method: 'POST',
                url: '/add-book',
                data: { book }
            }).then(function successCallback(response) {
                $scope.info = response.data;
            }, function errorCallback(response) {
                console.log(response)
            });


        }

    }


})();