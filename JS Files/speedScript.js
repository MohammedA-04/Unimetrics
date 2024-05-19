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
  if (option_from === "m/s") {
    base_unit_value = parseFloat(input.value)
  } 
  else if (option_from === "Km/h") {
    base_unit_value = parseFloat(input.value) / 3.6;
  } 
  else if (option_from === "mi/h") {
    base_unit_value = parseFloat(input.value) / 2.236936292;
  } 
  else if (option_from === "Knots") {
    base_unit_value = parseFloat(input.value) / 1.943846172;
  }
  else if (option_from === "Mach") {
    base_unit_value = parseFloat(input.value) * 343;
  }

  if (option_to === "m/s") {
    result.value = base_unit_value;

  } 
  else if (option_to === "Km/h") {
    result.value = base_unit_value * 3.6;
  } 
  else if (option_to === "mi/h") {
    result.value = base_unit_value * 2.236936292;
  } 
  else if (option_to === "Knots") {
    result.value = base_unit_value * 1.943846172;
  }
  else if (option_to === "Mach") {
    result.value = base_unit_value / 343;
  }
}