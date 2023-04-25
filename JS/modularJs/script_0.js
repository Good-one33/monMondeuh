let f0 = () => {
  console.log("f0");
  document
    .querySelector("#jobStyle")
    .setAttribute("href", "CSS/modularCss/s" + 0 + ".css");
  jobDisplayDiv.innerHTML = `       
 <div class="book">


<div class="page active">always used to write but this time I made it
public, I just wanted to improve my english I decided three days ago
to work on my self, I often make such decisions but this time I am
taking it seriously, from today and so on I will always write where
ever I am, even if</div>

<div class="page">I am a page two</div>
<div class="page"> always used to write but this time I made it
public, I just wanted to improve my english I decided three days ago
to work on my self, I often make such decisions but this time I am
taking it seriously, from today and so on I will always write where
ever I am, even if I</div>
<div class="page">I am a page four</div>
<div class="page"> always used to write but this time I made it
public, I just wanted to improve my english I decided three days ago
to work on my self, I often make such decisions but this time I am
taking it seriously, from today and so on I will always write where
ever I am, even if I</div>
</div> 
<button id="Nextbtn">Next</button>
<button id="Prevbtn">Prev</button>
`;

let Nextbtn = document.querySelector("#Nextbtn");
let Prevbtn = document.querySelector("#Prevbtn");
let pages = document.querySelectorAll(".page");
let activePageIndex;

pages.forEach((page, indexPage) => {
console.log(page);
if (page.classList.contains("active")) {
    activePageIndex = indexPage;
}
});

Nextbtn.addEventListener("click", (e) => {
    let pages = document.querySelectorAll(".page");
    if (activePageIndex < pages.length-1) { 
        pages[activePageIndex].classList.remove("active");       
        pages[activePageIndex + 1].classList.add("active"); 
        pages[activePageIndex ].classList.add("translate")       
        pages[activePageIndex + 1].classList.add("translate");       
        activePageIndex++;       
    }
});

Prevbtn.addEventListener("click", (e) => {
   if (activePageIndex > 0) {
   pages[activePageIndex].classList.remove("active");
   pages[activePageIndex - 1].classList.add("active");
   activePageIndex--;
    }
});
};
