(function () {

    angular.module('app')
        .controller('ContactCtrl', ContactCtrl);

    function ContactCtrl($scope, $http) {
        $scope.sendMessage = (contact) => {
            contact.recipient = 'marcinfutyma@gmail.com'
            $http({
                method: 'POST',
                url: '/send-message',
                data: { contact }
            }).then(function successCallback(response) {
                $scope.info = response.data;
            }, function errorCallback(response) {
            });

        }
    }


})();