(function () {

    angular.module('app')
        .controller('reservationBookCtrl', reservationBookCtrl);

    function reservationBookCtrl($scope, $http) {
        $scope.init = () => { 

        }

        $scope.reservationBook = (reservation) => {
       

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