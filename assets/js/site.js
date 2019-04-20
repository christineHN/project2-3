(function(){  // Browser sanity check:
  if (!('querySelector' in document && 'addEventListener' in document)) {
    // Old, old browser.
    console.log('Old browser, or you turned off js. Noice'); // not afraid to put it
    return;
  }
  // Da Dom offers you a favor you cant refuse
  document.addEventListener('DOMContentLoaded', function(){
    // Make this top of everything!
    var sto = window.localStorage;
    var items=['Mozzarella Sticks', 'Spinach Dip', 'Shrimp Cocktail', 'Crab Ragoon', 'Lemon Chicken', 'Spicy Beef', 'Roasted Duck', 'Eggplant Parmesan', 'Italian Beef', 'Fettuccini Alfredo', 'Baked Mostaccioli', 'Spaghetti and Meatballs', 'Greek Salad', 'Ceaser Salad', 'House Salad', 'Baked Potato', 'Mashed Potato', 'Cannoli Bundle', 'Cheese Cake'];
    console.log(items);
    console.log(sto);
    if (storageAvailable('localStorage')){
      if (document.querySelector('#menupage') !==null){
        addPrevious();
        addEvents();
      }
    }
    document.querySelector("#mclear").addEventListener('click',function(e){
      for(i=0; i<19; i++){
        sto.setItem(i,null);
        console.log(sto.getItem(i));
      }
    });
    // Declare variables
    // toggle function for focus css
    function focus(){
      if (document.querySelector('.focus')!==null){// this is to throw out error when no focus
        document.querySelector('.focus').classList.toggle('focus');}
      this.classList.toggle('focus');
    }

    function addPrevious(){
      var i;
      var foodnum;
      for(i=0; i<19; i++){
        foodnum='#'+'food'+(i+1);
        document.querySelector(foodnum).value=sto.getItem(i);
      }
    }

    function addEvents(){
      var i;
      var foodnum;
      for(i=0; i<19; i++){
        foodnum='#'+'food'+(i+1);
        document.querySelector(foodnum).addEventListener('focus', focus);
        document.querySelector(foodnum).addEventListener('change', function(e){
          var theid;
          if (e.target.id.length===5){
            theid = e.target.id.charAt(4);
          }
          if(e.target.id.length===6){
            theid = (1+e.target.id.charAt(5));
          }
          setquantity([theid]-1, e.target.value);
        });
      }
    }

    function setquantity(i, v){
      sto.setItem(i, v);
    }
    /**
    function eq(value, condition) {
      return value === condition;
    }
    function gt(value, condition) {
      return value > condition;
    }
    function gte(value, condition) {
      return value >= condition;
    }
    function lt(value,condition) {
      return value < condition;
    }
    function lte(value,condition) {
      return value <= condition;
    } */
  });
  function storageAvailable(type) {
    var storage = window[type], x = '__storage_test__';
    try {
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return false;
    }
  }
})();
