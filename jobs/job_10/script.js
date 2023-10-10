let f10 = ()=>{
  console.log('f10 is running')
  // this will load the style for the job 
  document.querySelector("#jobStyle").setAttribute("href", "jobs/job_"+ 10 +"/style.css");  
  // this will load the html content
  jobDisplayDiv.innerHTML = `
  <div> f10 is running </div>
  `
  // this is the js code running for this job 

}////////// don't delete me 