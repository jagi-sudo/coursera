(function () {

 'use strict';
  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope)
{
  // $scope.input = "";
    $scope.answer = "";


  $scope.displayAnswer = function () {
    var input1 = $scope.input;

    if (input1 == null || input1 == "") {
      $scope.answer = "Please Enter Data First!";
    }

    else {
      const words = input1.split(',');
      //calculateCount(words);
      var item_length = words.length;

       if (item_length < 4)
      {
         $scope.answer = "Enjoy!";
      }
      else
      {
         $scope.answer = "Too much!";
      }
    }


  }


};

// function calculateCount(words) {
//   //var answer = "Please enter data first";
//   if (words.length < 1)
//   {
//     $scope.answer = "Please enter data first";
//   } else if (words.length < 4)
//   {
//     $scope.answer = "Enjoy!";
//   }
//   else
//   {
//     $scope.answer = "Too much!";
//   }
//
//   }

})();
