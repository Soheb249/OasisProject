function convertemprature() {
    let val = document.getElementById("input-value");
    let result = document.getElementById("showresult");
    let input = document.getElementById("inputin");
    let output = document.getElementById("outputout");
  
    val.addEventListener("keyup", convertemprature);
    input.addEventListener("change", convertemprature);
    output.addEventListener("change", convertemprature);
  
    let inputValue = input.value;
    let outputValue = output.value;
  
    // celsius
    if (inputValue === "celsius" && outputValue === "fahrenhiet") {
      result.value = Number((val.value * 9) / 5) + 32;
    } else if (inputValue === "celsius" && outputValue === "kelvin") {
      result.value = Number(val.value) + 273.15;
    } else if (inputValue === "celsius" && outputValue === "celsius") {
      result.value = val.value;
    }
  
    // fahrenhiet
    if (inputValue === "fahrenhiet" && outputValue === "celsius") {
      result.value = Number((val.value - 32) * 5) / 9;
    } else if (inputValue === "fahrenhiet" && outputValue === "kelvin") {
      result.value = Number(((val.value - 32) * 5) / 9) + 273.15;
    } else if (inputValue === "fahrenhiet" && outputValue === "fahrenhiet") {
      result.value = val.value;
    }
  
    // kelvin
    if (inputValue === "kelvin" && outputValue === "celsius") {
      result.value = Number(val.value) - 273.15;
    } else if (inputValue === "kelvin" && outputValue === "fahrenhiet") {
      result.value = Number(((val.value - 273.15) * 9) / 5) + 32;
    } else if (inputValue === "kelvin" && outputValue === "kelvin") {
      result.value = val.value;
    }
  }
  
  function resetform(){
    document.getElementById("my-Form").reset();
  } 