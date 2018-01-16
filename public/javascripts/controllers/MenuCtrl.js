
(function () {

    angular.module('app')
        .controller('MenuCtrl', MenuCtrl);

    function MenuCtrl($scope, $http) {

        $scope.init = () => { 
            
        }

 

        $scope.listAppointments = () => {
            // $http({
            //     method: "GET",
            //     url: "/user/list-appointments"
            // }).then(function mySuccess(response) {
            //     $scope.list = response.data;
            // }, function myError(response) {
            //     console.log(response)
            // });
        }
 
    };

})();