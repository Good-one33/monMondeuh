let f11 = ()=>{
  console.log('f11 is running')
  // this will load the style for the job 
  document.querySelector('#jobStyle').setAttribute('href','CSS/modularCss/s'+11+'.css')   
  
  // this will load the html content
  jobDisplayDiv.innerHTML = `
  <div> f11 is running </div>
  `
  // this is the js code running for this job 

}////////// don't delete me 