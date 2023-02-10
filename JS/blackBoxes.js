
// loading the bodymoving animation 
var animation = bodymovin.loadAnimation({
  container: document.getElementById("bbWoelcomeSvgContainer"),
  path: "source/Bodymovin/blackBoxWelcomeAnimation.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "Demo1 ",
});

const jobsDiv = document.querySelector('.jobs')
const jobDisplayDiv = document.querySelector('.jobDisplay')
/*putting all job's divs in an array
  adding some attributes to each item in the list
  dynamically adding a  script link to the  file  in js folder
  adding the function handler for each job's box , this will control evrything in the JobDisplay div
  looping through all jobs and remove the selected class and add it only to the selected one 
*/
let jobs = Array.from(jobsDiv.children)   

jobs.forEach(job => {  
job.innerText =  job.id    
document.head.appendChild(document.createElement('script')).setAttribute('src','JS/modularJs/script_'+job.id +'.js')

job.addEventListener('click',e=>{ // each time we click on a job, we execute the function related to it 
eval('f'+e.target.id+'()') // eval is not the best option but I will keep it for now !!!!!  
jobs.forEach((job) => {  
    job.classList.remove('selected')  //  flag the selected job with selected !
})
e.target.classList.toggle('selected')
})    

})





