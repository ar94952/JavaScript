var $ = function (id) {
	return document.getElementById(id);
}

var calculate_click = function() {
	var subtotal = parseFloat( $("subtotal").value );
	var taxRate = parseFloat( $("taxRate").value );

	$("salesTax").value = "";
	$("total").value = "";

	if( isNaN(subtotal) || subtotal < 0 ) {
		alert("Subtotal must be > 0 and < 10000");
	} else if( isNaN(taxRate) || taxRate < 0 ) {
		alert("Tax Rate must be > 0 and < 12");
	} else if( isNaN(subtotal) || subtotal > 10000 ) {
		alert("Subtotal must be > 0 and < 10000");
	} else if( isNaN(taxRate) || taxRate > 12 ) {
		alert("Tax Rate must be > 0 and < 12");
	} else {
		var salesTax = subtotal * (taxRate / 100);
		salesTax = parseFloat( salesTax.toFixed(2) );
		var total = subtotal + salesTax;
		$("salesTax").value = salesTax;
		$("total").value = total.toFixed(2);
	}
}

var clearSubtotal = function() {
   $("subtotal").value = "  ";
   $("taxRate").value = "  ";
}

window.onload = function () {
	$("calculate").onclick = calculate_click;
	$("subtotal").focus();
	$("clear").onclick = clearSubtotal;
}

