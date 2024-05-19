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
  if (option_from === "Pascals") {
    base_unit_value = parseFloat(input.value)
  } 
  else if (option_from === "KiloPascals") {
    base_unit_value = parseFloat(input.value) * 1000;
  } 
  else if (option_from === "Bars") {
    base_unit_value = parseFloat(input.value) * 10**5;
  } 
  else if (option_from === "Atmospheres") {
    base_unit_value = parseFloat(input.value) * 101325;
  }

  
  if (option_to === "Pascals") {
    result.value = base_unit_value;
  } 
  else if (option_to === "KiloPascals") {
    result.value = base_unit_value / 1000;
  } 
  else if (option_to === "Bars") {
    result.value = base_unit_value / 10**5;
  } 
  else if (option_to === "Atmospheres") {
    result.value = base_unit_value / 101325;
  }
}