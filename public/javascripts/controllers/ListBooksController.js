(function () {

    angular.module('app')
        .controller('ListBooksCtrl', ListBooksCtrl);

    function ListBooksCtrl($scope, $http) {
        $scope.init = () => {
            $scope.listBooks();
        }


        $scope.listBooks = () => {
            $http({
                method: "GET",
                url: "/list-books"
            }).then(function mySuccess(response) {
                $scope.books = response.data;
                console.log($scope.books)
            }, function myError(response) {
                console.log(response)
            });
        }
    }


})();