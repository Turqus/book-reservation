(function () {

    angular.module('app')
        .controller('ReservedBooksCtrl', ReservedBooksCtrl);

    function ReservedBooksCtrl($scope, $http) {
        $scope.init = () => {
            $scope.listBooks();
            console.log('aha');
        };


        $scope.listBooks = () => {
            $http({
                method: "GET",
                url: "/reservation-list"
            }).then(function mySuccess(response) {
                $scope.reservations = response.data; 
            }, function myError(response) {
                console.log(response)
            });
        };


        $scope.cancelReservation = (reservation) => {
            $http({
                method: 'POST',
                url: '/cancel-reservation',
                data: { reservation }
            }).then(function successCallback(response) {
                $scope.info = response.data;
                console.log($scope.info)
                console.log('canceled');
            }, function errorCallback(response) {
                console.log(response)
            });

        };
    }


})();