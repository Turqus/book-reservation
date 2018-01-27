(function () {

    angular.module('app')
        .controller('BookDetailsCtrl', BookDetailsCtrl);

    function BookDetailsCtrl($scope, $http) {
        $scope.init = (book) => { 
            $scope.book = JSON.parse(book);
        }



    }


})();