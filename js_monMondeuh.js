const jobsDiv = document.querySelector('.jobs')
const jobDisplayDiv = document.querySelector('.jobDisplay')



let JobsRender = ()=>{
let jobs = Array.from(jobsDiv.children)  //putting all job's divs in an array 
jobs.forEach(job => {                      // adding some attributes to each item in the list 
let jobId = job.getAttribute('id')  
job.innerText = jobId // adding the function handler for each job's box , this will control evrything in the JobDisplay div
job.addEventListener('click',e=>{

    let element = document.createElement('div')
    element.innerHTML = "<h1> Hello "+ e.target.getAttribute('id') +"</h1> "

    jobDisplayDiv.appendChild(element)

   eval('f'+e.target.getAttribute('id')+'()')
   // eval is not the best option but I will keep it for now !
    
})    

})
}

JobsRender()




