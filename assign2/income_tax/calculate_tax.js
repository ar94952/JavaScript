
var $ = function (id) {
    return document.getElementById(id);
}
var processEntry = function() {
    var total;
    var income = parseFloat( $("income").value );
     $("tax").value = calcTaxes(income);
    function calcTaxes(income){
    var calculate = 0;
    if (income > 0 && income <= 9275){
       tax = (income * 0.10);
   }else if (income <= 37650 && income > 9275) {
       tax = (income - 9225) * 0.15 + 927.50;
   }else if (income <= 91150 && income > 37650) {
       tax = (income - 37650) * 0.25 + 5183.75;
   }else if (income <= 190150 && income > 91150) {
       tax = (income - 91150) * 0.28 + 18558.75 ;
   }else if (income <= 413350 && income > 190150) {
       tax = (income - 190150) * 0.33 + 46278.75 ;
   }else if (income <= 415050 && income > 413350) {
       tax = (income - 413350) * 0.35 + 119934.75 ;
   }else if (income > 415050) {
       tax = (income - 413350) * 0.396 + 120529.75 ;
   }       
  
    tax = tax.toFixed(2);
  
    return tax;

}
}
window.onload = function () {
    $("calculate").onclick = processEntry;
}