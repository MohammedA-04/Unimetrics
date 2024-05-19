// JS Nasir Khan Version -- Pages Fully Works

// *** Area Page *** 
var input = document.getElementById('Input');
var result = document.getElementById('Result');
var inputType = document.getElementById('InputType');
var resultType = document.getElementById('ResultType');
var option_from,option_to;

// now add listener
input.addEventListener("input",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);



function myResult(){


// when we change the input and output type vale we need to updata the 
// option_from and option_to

	option_from = inputType.value;
	option_to = resultType.value;
  var base_unit_value;

// now compare the input and resultType value and add formula


  if (option_from === "CubicMeter") {
    base_unit_value = parseFloat(input.value)
  } 
  else if (option_from === "CubicCentiMeter") {
    base_unit_value = parseFloat(input.value) * (10**6);
  }
  else if (option_from === "Liters") {
    base_unit_value = parseFloat(input.value) * 1000;
  } 
  else if (option_from === "Pints") {
    base_unit_value = parseFloat(input.value) / 2113.376298;
  }
  else if (option_from === "Gallons") {
    base_unit_value = parseFloat(input.value) / 264.1720512;
  }
  else if (option_from === "Millilitres") {
    base_unit_value = parseFloat(input.value) / 1000000000;
  }
  

  if (option_to === "CubicMeter") {
    result.value = base_unit_value;
  }
  else if (option_to === "CubicCentiMeter") {
    result.value = base_unit_value / (10**6);
  }
  else if (option_to === "Liters") {
    result.value = base_unit_value / 1000;
  }
  else if (option_to === "Pints") {
    result.value = base_unit_value * 2113.376298;
  }
  else if (option_to === "Gallons") {
    result.value = base_unit_value / 264.1720512;
  } 
  else if (option_to === "Millilitres") {
    result.value = base_unit_value * 1000000000;
  } 

  
}
    





