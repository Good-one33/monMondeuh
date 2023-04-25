let f3 = ()=>{
    console.log('f3')
    document.querySelector('#jobStyle').setAttribute('href','CSS/modularCss/s'+3+'.css')
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