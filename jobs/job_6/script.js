let f6 = ()=>{
    console.log('f6 is running')
    // this will load the style for the job 
    document.querySelector("#jobStyle").setAttribute("href", "jobs/job_"+ 6 +"/style.css"); 
    
    // this will load the html content
    jobDisplayDiv.innerHTML = `
    <div> f6 is running </div>
    `
    // this is the js code running for this job 

}////////// don't delete me 