let f9 = ()=>{
  console.log('f9 is running')
  // this will load the style for the job 
  document.querySelector('#jobStyle').setAttribute('href','CSS/modularCss/s'+9+'.css')   
  
  // this will load the html content
  jobDisplayDiv.innerHTML = `
  <div> f9 is running </div>
  `
  // this is the js code running for this job 

}////////// don't delete me 