let f8 = ()=>{
  console.log('f8 is running')
  // this will load the style for the job 
  document.querySelector('#jobStyle').setAttribute('href','CSS/modularCss/s'+8+'.css')   
  
  // this will load the html content
  jobDisplayDiv.innerHTML = `
  <div> f8 is running </div>
  `
  // this is the js code running for this job 

}////////// don't delete me 