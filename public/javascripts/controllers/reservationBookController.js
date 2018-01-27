(function () {

    angular.module('app')
        .controller('reservationBookCtrl', reservationBookCtrl);

    function reservationBookCtrl($scope, $http) {
        $scope.init = (book) => { 
            $scope.book = JSON.parse(book); 
        }

        $scope.reservationBook = (reservation) => { 
            reservation.idBook = $scope.book._id;
            reservation.nameBook = $scope.book.name;
            reservation.quantity = $scope.book.quantity;
            reservation.description = $scope.book.description;
            reservation.publishingHouse = $scope.book.publishingHouse;
            reservation.year = $scope.book.year;
            reservation.sites = $scope.book.sites;

            $http({
                method: 'POST',
                url: '/reservation-book',
                data: { reservation }
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