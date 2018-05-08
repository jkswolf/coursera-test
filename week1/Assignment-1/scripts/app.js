(function () {
    'use strict';
    var noLunchMenuItemsMsg = "Please enter data first";
    var noLunchMenuItemColor = 'red';
    var lunchMenuItemColor = 'green';
    
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController',  LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController ($scope) {
        $scope.lunchmenu="";
        $scope.quantityMessage = "";
        $scope.quantityMessageColor = noLunchMenuItemColor;
        
        $scope.IsTooMuch = function() {
            
            var lunchItems = $scope.lunchmenu.split(',');
            var lunchItemsCount = 0;
            
            for (var i = 0; i < lunchItems.length; i++)
            {
               if (lunchItems[i].length >= 1) //make sure array item is not empty before adding to count
                   lunchItemsCount++;
            }
            
             console.log($scope.lunchmenu);
            console.log(lunchItems.length);
            
            $scope.quantityMessage = lunchItemsCount > 3 ? "Too much!" :
            "Enjoy";
            
            if (lunchItemsCount >= 1)
                return;
            
            NoLunchMenuItems();

        }
        
        $scope.CheckQuantityMessageColor = function() {
            if ($scope.lunchmenu.length >= 1)
                $scope.quantityMessageColor = lunchMenuItemColor;
            else
                $scope.quantityMessageColor = noLunchMenuItemColor;
            
            $scope.quantityMessage = "";
        }
        
        function NoLunchMenuItems() {
            $scope.quantityMessage = noLunchMenuItemsMsg;
            $scope.quantityMessageColor = noLunchMenuItemColor;
        }
    }
    
})();
