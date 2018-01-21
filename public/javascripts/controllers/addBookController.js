(function () {

    angular.module('app')
        .controller('addBookCtrl', addBookCtrl);

    function addBookCtrl($scope, $http) {
        $scope.init = () => { 

        }

        $scope.addBook = (book) => {
       

            $http({
                method: 'POST',
                url: '/add-book',
                data: { book }
            }).then(function successCallback(response) {
                $scope.info = response.data;
                console.log($scope.info)
                console.log('added');
            }, function errorCallback(response) {
                console.log(response)
            });


        }

        // $scope.listBooks = () => {
        //     $http({
        //         method: "GET",
        //         url: "/list-books"
        //     }).then(function mySuccess(response) {
        //         $scope.books = response.data;
        //         console.log($scope.books)
        //     }, function myError(response) {
        //         console.log(response)
        //     });
        // }
    }


})();