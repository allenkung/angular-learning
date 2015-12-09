(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  // app.controller("PanelController", function(){
  //   this.tab = 1;
  //   // window.alert(this.tab);
  //   this.selectTab = function(setTab) {
  //     this.tab = setTab;
  //   };
  //   this.isSelected = function(checkTab) {
  //     return this.tab === checkTab;
  //   };
  // });

  app.controller("ReviewController", function(){
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function(){
          this.tab = 1;
          // window.alert(this.tab);
          this.selectTab = function(setTab) {
            this.tab = setTab;
          };
          this.isSelected = function(checkTab) {
            return this.tab === checkTab;
          };
      },
      controllerAs: 'panels'
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: '...',
      images: [
        {
          full: 'dodecahedron-01-full.jpg',
          thumb: 'dodecahedron-01-thumb.jpg'
        },
        {
          full: 'dodecahedron-02-full.jpg',
          thumb: 'dodecahedron-02-thumb.jpg'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!", 
          author: "joe@thomas.com" ,
        },
        {
          stars: 1,
          body: "This product sucks", 
          author: "tim@thomas.com" ,
        }
      ],
      tag: 'tag 1',
      canPurchase: false,
    },
    {
      name: 'Dodecahedron 2',
      price: 3.95,
      description: '...',
      canPurchase: true,
    }
  ];

})();
