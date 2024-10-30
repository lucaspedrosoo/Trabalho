var myApp= angular.module('blog', []);
// angular.module('blog').controller('Rest', function ($scope, $http){
//   $http.get('https://api-fake-blog.onrender.com/postagens').
//       success(function(data) {
//           $scope.publicacoes = data;
//       }
//   );
// });
/* controller da pagina details */
myApp.controller('Rest', ['$scope', '$http', function ($scope, $http) {

  const ids = [1, 2, 3, 4, 5,];
  $scope.publicacoes = [];

  for (let i = 0; i < ids.length; i++) {
    $http.get(`https://api-fake-blog.onrender.com/postagem/${ids[i]}`)
      .success(function(data) {
        $scope.publicacoes.push(data); 
      })
      .catch(function(error) {
        console.error("Erro ao carregar a postagem com ID:", ids[i],error);
      });
  }
}]);