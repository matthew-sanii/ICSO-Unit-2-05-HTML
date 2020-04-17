// JavaScript File
let arearesult=document.getElementById("arearesult");
function Click(){
  let slength=document.getElementById("slength");
  let slengthValue;
  slengthValue=Number(slength.value); // This turns the slength you input earlier from a string to a number
  if (slengthValue<=0 || isNaN(slengthValue)) { // This if statement checks to see if the slength is less than 0, or had a letter in it when the button was clicked
    arearesult.innerHTML="Invalid side length, please input new side length"; // These two lines of code return that the slength was invalid, and asks for a new slength value
  }
  else{
    let area;
    area=(slengthValue ** 2); // This piece of code calculates the area of the square by squaring the side length given.
    arearesult.innerHTML=area; // This line of code sends the value it found for the area of the square to the area divresult
    
    }
}