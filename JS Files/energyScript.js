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
  if (option_from === "Joules") {
    base_unit_value = parseFloat(input.value)
  } 
  else if (option_from === "ElectroVolt") {
    base_unit_value = parseFloat(input.value) * (1.60218 * (10**-19));
  } 
  else if (option_from === "KiloWatt/hour") {
    base_unit_value = parseFloat(input.value) * (3.6 * (10**6));
  } 
  else if (option_from === "Calories") {
    base_unit_value = parseFloat(input.value) * 4.184;
  }

  
  if (option_to === "Joules") {
    result.value = base_unit_value;
  } 
  else if (option_to === "ElectroVolt") {
    result.value = base_unit_value / (1.60218 * (10**-19));
  } 
  else if (option_to === "KiloWatt/hour") {
    result.value = base_unit_value / (3.6 * (10**6));
  } 
  else if (option_to === "Calories") {
    result.value = base_unit_value / 4.184;
  }
  
}