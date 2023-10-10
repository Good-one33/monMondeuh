let f8 = ()=>{
  console.log('f8 is running')
  // this will load the style for the job 
  document.querySelector("#jobStyle").setAttribute("href", "jobs/job_"+ 8 +"/style.css");  
  
  // this will load the html content
  jobDisplayDiv.innerHTML = `
  <div> f8 is running </div>
  `
  // this is the js code running for this job 

}////////// don't delete me 