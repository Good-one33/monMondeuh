const divs = document.querySelectorAll('div')


divs.forEach(div =>{
    div.addEventListener('click', ()=>{
        console.log('clicked')
    })
})

function changecolor(element){
    element.style.backgroundColor = 'grey'
}











/*
const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')




//bubbling
grandparent.addEventListener('click', e => {
    console.log(" grandparent ")
}, {once : true})

parent.addEventListener('click', e => {
    console.log(" parent ")
})


child.addEventListener('click', e => {
    console.log(" child  ")
})
*/




