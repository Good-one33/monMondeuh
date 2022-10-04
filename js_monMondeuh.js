const jobsDiv = document.querySelector('.jobs')
const jobDisplayDiv = document.querySelector('.jobDisplay')



let JobsRender = ()=>{
let jobs = Array.from(jobsDiv.children)  //putting all job's divs in an array 
jobs.forEach(job => {                      // adding some attributes to each item in the list 
let jobId = job.getAttribute('id')  
job.innerText = jobId 
job.setAttribute('onclick','f'+jobId +'()')    // adding the function handler for each job's box , this will control evrything in the JobDisplay div

})
}

JobsRender()



 


//::::::::::::::::::::::::::::----functions-----::::::::::::::::::::::::::::::::

//each function here control evrything in the jobDisplay, each fucntion for each job ( box )
//................................. ---f0---.....................................
let f0 = ()=>{
  console.log('f0')
  document.querySelector('#jobStyle').setAttribute('href','css/s'+0+'.css')
  jobDisplayDiv.innerHTML = ` 
  <div class="control">
       <button id="btn_prv"  >previous</button> 
       <button id="btn_next">next</button></div>   
   <div class="line">
       <div class="cercle"></div>
   </div>    
   <div class="spinner">    
   </div>`


    
        const jobDisplay = document.querySelector('.jobDisplay')
        jobDisplay.style.setProperty('--cercle-position', 0)

        jobDisplay.addEventListener('click', e=>{         
            if(e.target.matches("#btn_next")){
            let current_cercle_position = jobDisplay.style.getPropertyValue('--cercle-position')
            if(current_cercle_position <= 3){
                current_cercle_position++
                jobDisplay.style.setProperty('--cercle-position', current_cercle_position)
                play()               
             }
            }


           if(e.target.matches("#btn_prv")){
                let current_cercle_position = jobDisplay.style.getPropertyValue('--cercle-position')
           if(current_cercle_position >= 1){
           current_cercle_position--
    
           jobDisplay.style.setProperty('--cercle-position', current_cercle_position)
            play()
            }
            }
        
        })
           let play = ()=>{
           
                jobDisplay.querySelector('.spinner').style.setProperty('--play-state','running')
                setTimeout(pause, 1000)
            }
            
            let pause = ()=>{
           
                jobDisplay.querySelector('.spinner').style.setProperty('--play-state','paused')
              
            }

   
}


//................................. ---f1---.....................................
let f1 = ()=>{
    console.log('f1')
    document.querySelector('#jobStyle').setAttribute('href','css/s'+1+'.css')
    jobDisplayDiv.innerHTML = `<button> red </button>
    <button>blue</button> `

    let jobDisplay = document.querySelector('.jobDisplay')
        let btn = document.querySelectorAll('button')

        btn[0].addEventListener('click', ()=> {
            jobDisplay.classList.toggle('red')
        })
        btn[1].addEventListener('click', ()=> {
            jobDisplay.classList.toggle('blue')
        })
}

//................................. ---f2---.....................................
let f2 = ()=>{
    console.log('f2')
    document.querySelector('#jobStyle').setAttribute('href','css/s'+2+'.css')
    jobDisplayDiv.innerHTML = ` `
}

//................................. ---f3---.....................................

let f3 = ()=>{
  console.log('f2')
  document.querySelector('#jobStyle').setAttribute('href','css/s'+2+'.css')
  jobDisplayDiv.innerHTML = ` `
}