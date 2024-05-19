// Length Page   

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


  if (option_from === "Meter") {
    base_unit_value = parseFloat(input.value);
  }
  else if(option_from === "Centimeter"){
    base_unit_value = parseFloat(input.value) /100;
  }
  else if(option_from === "Millimeter"){
    base_unit_value = parseFloat(input.value) /1000;
  }
  else if(option_from === "Micrometer"){
    base_unit_value = parseFloat(input.value) /10**6;
  }
  else if(option_from === "Nanometer"){
    base_unit_value = parseFloat(input.value) / 10**9;
  }
  else if(option_from === "Mile"){
    base_unit_value = parseFloat(input.value) * 1609.344;
  }
  else if(option_from === "Yard"){
    base_unit_value = parseFloat(input.value) / 0.9144;
  }
  else if(option_from === "Inches"){
    base_unit_value = parseFloat(input.value) /39.3700787;
  }
  else if(option_from === "Feet"){
    base_unit_value = parseFloat(input.value) /3.2808399;
  }
  else if(option_from === "Kilometer"){
    base_unit_value = parseFloat(input.value) *1000;
  }
  else if(option_from === "LightYear"){
    base_unit_value = parseFloat(input.value) * (9461 * (10**15));
  }
  

  
  if (option_to === "Meter") {
    result.value = base_unit_value;
  }  
  else if(option_to === "Kilometer"){
    result.value = base_unit_value /1000;
  }
  else if(option_to === "Centimeter"){
    result.value = base_unit_value *100;
  }
  else if(option_to === "Millimeter"){
    result.value = base_unit_value *1000;
  }
  else if(option_to === "Micrometer"){
    result.value = base_unit_value * 10**6;
  }
  else if(option_to === "Nanometer"){
    result.value = base_unit_value * 10**9;
  }
  else if(option_to === "Mile"){
    result.value = base_unit_value / 1609.344;
  }
  else if(option_to === "Yard"){
    result.value = base_unit_value * 0.9144;
  }
  else if(option_to === "Inches"){
    result.value = base_unit_value *39.3700787;
  }
  else if(option_to === "Feet"){
    result.value = base_unit_value *3.2808399;
  }
  else if(option_to === "LightYear"){
    result.value = base_unit_value / (9461 * (10**15));
  }

}
