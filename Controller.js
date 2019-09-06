(function() {
    var app = angular.module('AngularApp', ['ngMaterial']);
    app.controller('ControllerApp', ['$scope', function($scope) {
        $scope.title = 'Lista de peliculas';
        $scope.cities = ["Houston, TX, 33619", "Atlanta, GA, 30123", "Los Angeles, CA, 302313", "California, CA, 302313", "Salk Lake City, UT, 308901"];
        $scope.movies = [
            { price: 205.00, date: new Date(2019, 08, 18, 7, 12, 32, 0), from: $scope.cities[0], To: $scope.cities[1], quantity: 1, tog: true, sales: false },
            { price: 200.00, date: new Date(2019, 08, 18, 17, 12, 32, 0), from: $scope.cities[1], To: $scope.cities[0], quantity: 2, tog: true, sales: false },
            { price: 195.00, date: new Date(2019, 08, 18, 18, 12, 32, 0), from: $scope.cities[2], To: $scope.cities[3], quantity: 1, tog: true, sales: true },
            { price: 201.00, date: new Date(2019, 08, 18, 7, 12, 32, 0), from: $scope.cities[1], To: $scope.cities[2], quantity: 1, tog: true, sales: false },
            { price: 201.00, date: new Date(2019, 08, 18, 7, 12, 32, 0), from: $scope.cities[0], To: $scope.cities[2], quantity: 1, tog: false, sales: false }
        ];
        $scope.cityF = ""
        $scope.cityT = ""
        $scope.add = {
            title: '',
            price: ''
        };
        $scope.togG = true;
        $scope.add_movie = function() {
            $scope.movies.push(angular.copy($scope.add));
        };

        $scope.change_tog = function() {
            if ($scope.togG) {

                $scope.togG = false;
            } else {

                $scope.togG = true;
            }
            $scope.movies.forEach(function(element) {
                element.tog = $scope.togG;
            });

        };
        $scope.search = {}
        $scope.delete_tog = function() {

            var copymovies = $scope.movies.slice().reverse();
            for (var i = copymovies.length - 1; i >= 0; i--) {
                if ($scope.movies[i].tog) {
                    $scope.movies.splice(i, 1);
                }
            }


        };
        $scope.sales = true;
        $scope.set_quantity = function() {

            if ($scope.sales) {
                console.log($scope.search)
                $scope.search.sales = true;
                $scope.sales = false;

            } else {
                $scope.sales = true;
                delete $scope.search.sales;
            }


        };

    }]);
})();