(function () {

    angular.module('app')
        .controller('ContactCtrl', ContactCtrl);

    function ContactCtrl($scope, $http) {
        $scope.init = (book) => { 
            // $scope.book = JSON.parse(book); 
        }

        $scope.sendMessage = (contact) => { 
            
            contact.recipient = 'bartlomiejflis94@gmail.com'

            $http({
                method: 'POST',
                url: '/send-message',
                data: { contact }
            }).then(function successCallback(response) {
                $scope.info = response.data;
                console.log($scope.info)
                console.log('added');
            }, function errorCallback(response) {
                console.log(response)
            });
 
        } 
    }


})();