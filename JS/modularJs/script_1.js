let f1 = ()=>{
    console.log('f1')
    document.querySelector('#jobStyle').setAttribute('href','CSS/modularCss/s'+1+'.css')
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