// JS Nasir Khan Version  

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

  
  
  
  if (option_from === "SquareMeter") {
    base_unit_value = parseFloat(input.value)
  }
  else if(option_from === "SquareFeet"){
    base_unit_value = parseFloat(input.value) / 10.764;
  }
  else if(option_from === "SquareKilometer"){
    base_unit_value = parseFloat(input.value) * 10**6;
  }
  else if(option_from === "Hectare"){
    base_unit_value = parseFloat(input.value) * 10**4;
  }
  else if(option_from === "Acre"){
    base_unit_value = parseFloat(input.value) * 4046.856422;
  }

  
  if (option_to === "SquareMeter") {
    result.value = base_unit_value;
  }  
  else if(option_to === "SquareFeet"){
    result.value = base_unit_value * 10.764;
  }
  else if(option_to === "SquareKilometer"){
    result.value = base_unit_value / 10**6;
  }
  else if(option_to === "Hectare"){
    result.value = base_unit_value / 10**4;
  }
  else if(option_to === "Acre"){
    result.value = base_unit_value / 4046.856422;
  }

}

    
