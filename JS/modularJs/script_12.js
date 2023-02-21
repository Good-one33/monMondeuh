let f12 = ()=>{
    console.log('f12 is running')
    // this will load the style for the job 
    document.querySelector('#jobStyle').setAttribute('href','CSS/modularCss/s'+12+'.css')   
    
    // this will load the html content
    jobDisplayDiv.innerHTML = `
    <div class ="container">
    <div id="item1"> </div>
    <div id="item2"> </div>
    </div>
    `

    // this is the js code running for this job 
    let loop = true;

    var animationTen = bodymovin.loadAnimation({
        container: document.getElementById('item1'),
        path: "https://assets7.lottiefiles.com/temp/lf20_D0nz3r.json",
        renderer: "svg",
        loop: loop,
        autoplay: true,
      });
      var animationTen = bodymovin.loadAnimation({
        container: document.getElementById('item2'),
        path: "https://maxst.icons8.com/vue-static/landings/animated-icons/icons/book/book.json",
        renderer: "svg",
        loop: loop,
        autoplay: true,
      });
}////////// don't delete me 