// *** Time Page *** 
var input = document.getElementById('Input');
var result = document.getElementById('Result');
var inputType = document.getElementById('InputType');
var resultType = document.getElementById('ResultType');
var option_from, option_to;

// now add listener

input.addEventListener("input", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);



function myResult() {

  // when we change the input and output type vale we need to updata the 
  // option_from and option_to

  option_from = inputType.value;
  option_to = resultType.value;
  var base_unit_value;

  // now compare the input and resultType value and add formula

  // Seconds in {Time} 
  if (option_from === "Celsius") {
    base_unit_value = parseFloat(input.value)
  } 
  else if (option_from === "Fahrenhite") {
    base_unit_value = (parseFloat(input.value) - 32) / (9/5) ;
  } 
  else if (option_from === "Kelvin") {
    base_unit_value = parseFloat(input.value) - 273.15;
  } 
 

  if (option_to === "Celsius") {
    result.value = base_unit_value;
  } 
  else if (option_to === "Fahrenhite") {
    result.value = (base_unit_value * (9/5)) + 32;
  } 
  else if (option_to === "Kelvin") {
    result.value = base_unit_value + 273.15;
  } 

}