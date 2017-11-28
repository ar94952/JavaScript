/********************************
 *Anthony Rivera ****************
 *anthonyriv2@my.smccd.edu ******
 *CIS 114 OL ********************
 *future_value.js ***************
 *Assignment 6 Exercise  14-2 ***
 *11/26/2017 ********************
 ********************************/

"use strict";
var calculateFutureValue = function(investment, annualRate, years) {
    try {
        if (isNaN(investment) || investment <= 0 || isNaN(annualRate)
            || annualRate <= 0 || isNaN(years) || years <= 0) {
        // add a throw statement here to make sure the passed arguments are
        // valid
        throw "Range Error: All entries must be numbers greater than zero ";
        }
        // add a throw statement here to test the exception handling
        var monthlyRate = annualRate / 12 / 100;
        var months = years * 12;
        var futureValue = 0;
        for ( var i = 1; i <= months; i++) {
            futureValue = (futureValue + investment) * (1 + monthlyRate);

        }
        return futureValue.toFixed(2);
    } catch (e) {
      $("#message").text(e);
      }

};

$(document).ready(function() {
    $("#calculate").click(function() {
        $("#message").text("");
        var investment = parseFloat($("#investment").val());
        var annualRate = parseFloat($("#rate").val());
        var years = parseInt($("#years").val());
        var fv;
        fv = calculateFutureValue(investment, annualRate, years);
        $("#future_value").text(fv);
        $("#investment").focus();
        $("#investment").select();
    });
    
    $("#clear").click(function() {
        $("#investment").val("");
        $("#rate").val("");
        $("#years").val("");
        $("#future_value").text("");
        $("#message").text("");
        $("#investment").focus();
    });
    // set focus on initial load
    $("#investment").focus();
});

