let f1 = ()=>{
    console.log('f1')
    // this will load the style for the job 
    document.querySelector('#jobStyle').setAttribute('href','CSS/modularCss/s'+1+'.css')   
    
    // this will load the html content
    jobDisplayDiv.innerHTML = `<button> red </button>   
    <button>blue</button> `

    // this is the js code running for this job 
    let jobDisplay = document.querySelector('.jobDisplay')
        let btn = document.querySelectorAll('button')

        btn[0].addEventListener('click', ()=> {
            jobDisplay.classList.toggle('red')
        })
        btn[1].addEventListener('click', ()=> {
            jobDisplay.classList.toggle('blue')
        })
}