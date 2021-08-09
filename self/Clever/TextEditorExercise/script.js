
 /**
 * Update the output text as a user types in the textarea
 */

 
updateText = () => { 
   let inputText = document.getElementById("text-input").value;
   document.getElementById("text-output").innerHTML=inputText;
}

/**
 * Toggle the bold class for the output text 
 */
makeBold = elem => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");  
}

/**
 * Toggle the italic class for the output text
 */
 makeItalic = elem => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
  
}

/**
 * Toggle the underline class for the output text 
 */
makeUnderline = elem =>{
  elem.classList.toggle("active");
  var textOutput =document.getElementById("text-output");
  var classList =textOutput.classList;
  if(classList.contains("underline"))
    textOutput.classList.remove("underline");
  else
  textOutput.classList.add("underline");
  
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons 
 */
alignText = (elem, alignType) => {
  var textOutput =document.getElementById("text-output");
  elem.classList.toggle("active");  
  textOutput.style.textAlign=alignType;
  elem.classList.toggle("active");
}