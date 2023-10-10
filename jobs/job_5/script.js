let f5 = ()=>{
  console.log('f5 is running')
  // this will load the style for the job 
  document.querySelector("#jobStyle").setAttribute("href", "jobs/job_"+ 5 +"/style.css");
  
  // this will load the html content
  jobDisplayDiv.innerHTML = `
  <div class="container">
  <div class="spinner"></div>
  <div class="controller">
    <button id="leftBtn" class="btn">Left</button>
    <button id="rightBtn" class="btn">Right</button>
  </div>
</div>;
  `
  // this is the js code running for this job 

  let Btns = [...document.querySelectorAll(".btn")];
  let spinner = document.querySelector(".spinner");

  jobDisplayDiv.addEventListener("click", (event) => {
let turnNumber = getComputedStyle(spinner).getPropertyValue("--turn-number"); 
    
if(event.target.id === 'rightBtn'){
    turnNumber++;
    spinner.style.setProperty('--turn-number',turnNumber )
}else if(event.target.id === 'leftBtn'){
    turnNumber--;
    spinner.style.setProperty('--turn-number',turnNumber )
}
});


}////////// don't delete me 