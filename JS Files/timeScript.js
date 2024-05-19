// Currently Broken ->-> Fixed Lets Goo

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
  if (option_from === "Seconds") {
    base_unit_value = parseFloat(input.value)
  } 
  else if (option_from === "Minute") {
    base_unit_value = parseFloat(input.value) * 60;
  } 
  else if (option_from === "Hour") {
    base_unit_value = parseFloat(input.value) * 3600;
  } 
  else if (option_from === "Day") {
    base_unit_value = parseFloat(input.value) * 86400;
  }

  if (option_to === "Seconds") {
    result.value = base_unit_value;

  } 
  else if (option_to === "Minute") {
    result.value = base_unit_value / 60;
  } 
  else if (option_to === "Hour") {
    result.value = base_unit_value / 3600;
  } 
  else if (option_to === "Day") {
    result.value = base_unit_value / 86400;
  }
}

