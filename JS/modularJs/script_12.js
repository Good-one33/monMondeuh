let f12 = ()=>{
    console.log('f12 is running')
    // this will load the style for the job 
    document.querySelector('#jobStyle').setAttribute('href','CSS/modularCss/s'+6+'.css')   
    
    // this will load the html content
    jobDisplayDiv.innerHTML = `
    <div class="icon-container">
        <span class="eicon-security"></span>
    </div>
    <div class="icon-container">
        <span class="eicon-blocks"> test</span>
    </div>
    <div class="icon-container">
        <span class="eicon-globe"></span>
    </div>`

    // this is the js code running for this job 

}////////// don't delete me 