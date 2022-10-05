const jobsDiv = document.querySelector('.jobs')
const jobDisplayDiv = document.querySelector('.jobDisplay')




let jobs = Array.from(jobsDiv.children)  //putting all job's divs in an array 
jobs.forEach(job => {  
job.innerText =  job.getAttribute('id')    // adding some attributes to each item in the list 
let script = document.createElement('script')
document.head.appendChild( script).setAttribute('src','js/script_'+job.getAttribute('id') +'.js')
 // adding the function handler for each job's box , this will control evrything in the JobDisplay div
 job.addEventListener('click',e=>{
eval('f'+e.target.getAttribute('id')+'()')
// eval is not the best option but I will keep it for now !    
})    

})





