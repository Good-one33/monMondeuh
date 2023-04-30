let f5 = ()=>{
  console.log('f6 is running')
  // this will load the style for the job 
  document.querySelector('#jobStyle').setAttribute('href','CSS/modularCss/s'+5+'.css')   
  
  // this will load the html content
  jobDisplayDiv.innerHTML = `
  <div> f5 is running </div>
  `
  // this is the js code running for this job 

}////////// don't delete me 