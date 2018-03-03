(function () {

    angular.module('app')
        .controller('ReservedBooksCtrl', ReservedBooksCtrl);

    function ReservedBooksCtrl($scope, $http) {
        $scope.init = () => {
            $scope.listBooks();
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


        $scope.cancelReservation = (reservation, index) => {
            $scope.reservations.splice(index, 1);
            $scope.index = index;
            $http({
                method: 'POST',
                url: '/cancel-reservation',
                data: { reservation }
            }).then(function successCallback(response) {
                $scope.info = response.data;
            }, function errorCallback(response) {
                console.log(response)
            });

        };
    }


})();