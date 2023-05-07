let f1 = () => {
  console.log("f1");
  // this will load the style for the job
  document
    .querySelector("#jobStyle")
    .setAttribute("href", "CSS/modularCss/s" + 1 + ".css");

  // this will load the html content
  jobDisplayDiv.innerHTML = `
        Hello I am script one
        <div class="J1_inputContainer">
        <input type="number" class="J1_input" >
        <input type="number" class="J1_input" >
        </div>
    `;
  //the code running for the job
  let objectIds = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    
  ];

  let myList = [];
  console.log(objectIds.length);
  let compteur = 0;
  let cpuMax = 6;
  let subListMax = cpuMax;
  let maxNbrSubList ;
  if((objectIds.length % cpuMax) != 0){
    maxNbrSubList = Math.floor(objectIds.length / cpuMax) + 1
  } else{
    maxNbrSubList = Math.floor(objectIds.length / cpuMax) 
  }

  for (let i = 1; i <= maxNbrSubList; i++) {
    let mySubList = [];
    for (let j = compteur; j < subListMax; j++) {
      mySubList.push(objectIds[j]);
      compteur++;
    }
    subListMax = subListMax + cpuMax;
    if (subListMax > objectIds.length) {
      subListMax = objectIds.length;
    }
    myList.push(mySubList);
  }

  myList.forEach(subList => {
    console.log(subList)
  })



  // this is the js code running for this job
};
