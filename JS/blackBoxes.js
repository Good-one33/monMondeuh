// awsome icones

// loading the bodymoving animation 
var animation = bodymovin.loadAnimation({
  container: document.getElementById("bbWelcomeSvgContainer"),
  path: "source/Bodymovin/blackBoxWelcomeAnimation.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "Demo1 ",
});

let jobsDiv = document.querySelector('.jobs')
let jobDisplayDiv = document.querySelector('.jobDisplay')
/*putting all job's divs in an array
  adding some attributes to each item in the list
  dynamically adding a  script link to the  file  in js folder
  adding the function handler for each job's box , this will control evrything in the JobDisplay div
  looping through all jobs and remove the selected class and add it only to the selected one 
*/
let jobs = Array.from(jobsDiv.children)   

jobs.forEach(job => {  
job.innerText =  job.id
// if(job.id == 6){
//   job.classList.add('red')
// } 
document.head.appendChild(document.createElement('script')).setAttribute('src','JS/modularJs/script_'+job.id +'.js')
let child = document.createElement('div').classList.add('item')  

job.addEventListener('click',e=>{ // each time we click on a job, we execute the function related to it 
eval('f'+e.target.id+'()') // eval is not the best option but I will keep it for now !!!!!  
jobs.forEach((job) => {  
    job.classList.remove('selected')  //  flag the selected job with selected !
})
e.target.classList.toggle('selected')
})    

})

var container = document.getElementById('item');
var state = 'play';


var animationTest = bodymovin.loadAnimation({
  container: document.getElementById('item'),
  path:"https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json",
  renderer: "svg",
  loop: false,
  autoplay: false,
});
animationTest.goToAndStop(14, true);


container.addEventListener('click', () => {
  if(state === 'play') {
   animationTest.playSegments([14, 27], true);
    state = 'pause';
  } else {
    animationTest.playSegments([0, 14], true);
    state = 'play';
  }
});

animationTest.addEventListener('DOMLoaded', () => {
  const p = document.createElement('p');
  p.textContent = 'The animation has just been loaded into the container. Thanks to the DOMLoaded event!';
  container.after(p);
});

var count = 0;

animationTest.addEventListener('complete', () => {
  count++;
  const p = document.createElement('p');
  let text = `You have played the animation ${count} `;
  let plural = (count === 1) ? 'time' : 'times';
  text += `${plural}. Thanks to the complete event!`
  
  p.textContent = text;
  
  if(count !== 1) {
    jobDisplayDiv.lastChild.textContent = text;
  } else jobDisplayDiv.appendChild(p);
})

jobs.forEach(job => { 

  // job.classList.add('red')
  var container = document.getElementById(job.id);
  var state = 'play';
  let path = '';
  if(job.id == 6 || job.id == 12 || job.id == 8 ){
    path = "https://maxst.icons8.com/vue-static/landings/animated-icons/icons/settings/settings.json";
  }else if (job.id == 7 || job.id == 1 || job.id == 5){
    path = "https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json";
  }else if (job.id == 0 || job.id == 9 || job.id == 13){
    path = "https://maxst.icons8.com/vue-static/landings/animated-icons/icons/book/book.json";
  }else {
    path = "https://maxst.icons8.com/vue-static/landings/animated-icons/icons/adjust/adjust.json";
  }
  var job6Animation = bodymovin.loadAnimation({
    container: container,
    path:path,                                                                              //"https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json",
    renderer: "svg",
    loop: false,
    autoplay: false,
  });
  job6Animation.goToAndStop(14, true);
  container.addEventListener('click', () => {
    if(state === 'play') {
      job6Animation.playSegments([14, 27], true);
      state = 'pause';
    } else {
      job6Animation.playSegments([0, 14], true);
      state = 'play';
    }
  });


 })