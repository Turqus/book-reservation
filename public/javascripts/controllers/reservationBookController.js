(function () {

    angular.module('app')
        .controller('reservationBookCtrl', reservationBookCtrl);

    function reservationBookCtrl($scope, $http) {
        $scope.init = (book) => { 
            $scope.book = JSON.parse(book); 
        }

        $scope.reservationBook = (reservation) => { 
            console.log(reservation)
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
            }, function errorCallback(response) {
                console.log(response)
            });
        }
 
    }


})();