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
  if (option_from === "Grams") {
    base_unit_value = parseFloat(input.value)
  } 
  else if (option_from === "Milligrams") {
    base_unit_value = parseFloat(input.value) / 1000;
  } 
  else if (option_from === "Kilograms") {
    base_unit_value = parseFloat(input.value) * 1000;
  } 
  else if (option_from === "Tons") {
    base_unit_value = parseFloat(input.value) * (10**6);
  }
  else if (option_from === "Pound") {
    base_unit_value = parseFloat(input.value) * 453.592;
  }
  else if (option_from === "Ounce") {
    base_unit_value = parseFloat(input.value) * 28.3495;
  }

  
  if (option_to === "Grams") {
    result.value = base_unit_value;

  } 
  else if (option_to === "Milligrams") {
    result.value = base_unit_value * 1000;
  } 
  else if (option_to === "Kilograms") {
    result.value = base_unit_value / 1000;
  } 
  else if (option_to === "Tons") {
    result.value = base_unit_value / (10**6);
  }
  else if (option_to === "Pound") {
    result.value = base_unit_value / 453.592;
  }
  else if (option_to === "Ounce") {
    result.value = base_unit_value / 28.3495;
  }
}