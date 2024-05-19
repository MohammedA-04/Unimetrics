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
  if (option_from === "Degrees") {
    base_unit_value = parseFloat(input.value)
  } 
  else if (option_from === "Radians") {
    base_unit_value = parseFloat(input.value) * (360 / (2* Math.PI));
  } 
  else if (option_from === "Minutes(')") {
    base_unit_value = parseFloat(input.value) /60;
  } 
  else if (option_from === "Seconds('')") {
    base_unit_value = parseFloat(input.value) / 3600;
  }

  
  if (option_to === "Degrees") {
    result.value = base_unit_value;
  } 
  else if (option_to === "Radians") {
    result.value = base_unit_value / (360 / (2* Math.PI));
  } 
  else if (option_to === "Minutes(')") {
    result.value = base_unit_value * 60;
  } 
  else if (option_to === "Seconds('')") {
    result.value = base_unit_value * 3600;
  }
}