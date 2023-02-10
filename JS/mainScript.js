

// loading the bodymoving animation 
var animation = bodymovin.loadAnimation({
    container: document.getElementById("mainWelcomeSngContainer"),
    path: "source/Bodymovin/welcomeAnimation.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
    name: "Demo ",
  });

// Carousel controller
const buttons = document.querySelectorAll("[data-carousel-button]")  // working with data attribute is easier

buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")
        console.log(activeSlide.dataset.active)
        //console.log(slides.querySelector("[data-active]"))
        let newIndex = [...slides.children].indexOf(activeSlide)+offset   
       // console.log([...slides.children])
        if(newIndex < 0 ) newIndex = slides.children.length-1
        if(newIndex >= slides.children.length ) newIndex = 0
        slides.children[newIndex].dataset.active = true
        slides.children[newIndex].dataset.test = "malik"
        delete activeSlide.dataset.active
        //activeSlide.removeAttribute("data-active")
    })
})

//timeLine controller 
const navigationContainer = document.querySelector(".navigContainer")
const staticElements = document.querySelectorAll(".staticElement")
const blocks = document.querySelectorAll('.block') 
const years = document.querySelectorAll('.year')
const diploms = document.querySelectorAll('.diplom')

navigationContainer.style.setProperty("--time-line-width", navigationContainer.dataset.timeLineWidth)
navigationContainer.style.setProperty("--time-line-jumpe", navigationContainer.dataset.timeLineWidth /(staticElements.length - 1) )


staticElements.forEach(staticElement =>{
    //positioning the static element
    let val = (staticElement.dataset.elementOrder * navigationContainer.dataset.timeLineWidth /(staticElements.length - 1)) -10
    staticElement.style.transform = "translate(" + val+ "px ,-5px )"  
    //click Hanler for the static element
    staticElement.addEventListener('click', ()=>{
        console.log('static Element '+staticElement.dataset.elementOrder)
        navigationContainer.style.setProperty("--moving-element-position", staticElement.dataset.elementOrder)
        console.log('moving Element position '+navigationContainer.style.getPropertyValue("--moving-element-position"))
        //displaying the right block (----> I will create a function to make this code more clean <----)
        blocks.forEach(block =>{ 
            block.style.display = "none"           
        })
        blocks[navigationContainer.style.getPropertyValue("--moving-element-position")].style.display = "block"
        years.forEach(year =>{ 
            year.style.opacity = "0.0"           
        })
        years[navigationContainer.style.getPropertyValue("--moving-element-position")].style.opacity = "1"
        diploms.forEach(diplom =>{ 
            diplom.style.opacity = "0.0"          
        })
        diploms[navigationContainer.style.getPropertyValue("--moving-element-position")].style.opacity = "1"
    })
})

























// '...'  spread operator   can use it pass elements of an array as arguments to a funcition    f(...array)        can ust it to copy an array   arr2 =[...arr1]  or contactenate    arr = [...array1, ...array2]  

/*
the dataset read-only property of the html element provides read/write access to custom data attributes (data-*) on elements
it exposes a map of strings  with an entry for each  data-* attribute 

dataset will return DOMStringMap objet { data1: val1, data2, val2}
div.dataset.data1 = otherval    this will change the value of data1   
js convert dashes  to comelcase 
to remove the attribue  we can use div.removeAttribute('data-name')
or we can use delete 
*/