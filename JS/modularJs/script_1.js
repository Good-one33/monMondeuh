let f1 = () => {
  console.log("f1");
  // this will load the style for the job
  document
    .querySelector("#jobStyle")
    .setAttribute("href", "CSS/modularCss/s" + 1 + ".css");

  // this will load the html content
  jobDisplayDiv.innerHTML = `
        <div class="J1_controlContainer">
        <div class="J1_subContainer_1">
        <div class="J1_subContainer_2">
        Nbr of Items
        <input type="number" class="J1_input" min="0" max="100" value="10">
        </div>
        <div class="J1_subContainer_2">
        Row length
        <input type="number" class="J1_input" min="1" max="100" value="2">
        </div>
        </div>
        <div class="J1_subContainer_1">
        <button>Generate</button>
        </div>
        </div>
        <div class="initialList"></div>
        <div class="sublistsContainer"></div>
    `;
  //the code running for the job
  //---------------------< getSublists >----------------this function takes an initial list and returns another list containing sublist with a length defined in the second argument
  function getSublists(initialList, subListLength) {
    let resultList = [];
    //console.log("initial List " + initialList);
    let count = 0;
    let subListMax = subListLength; // in beggining it is equal to sublistLength but it will changes each loop 
    let maxNbrSubList;
    if (initialList.length % subListLength != 0) {
      maxNbrSubList = Math.floor(initialList.length / subListLength) + 1;
    } else {
      maxNbrSubList = Math.floor(initialList.length / subListLength);
    }
    if (subListLength > initialList.length) {
      subListMax = initialList.length;
    }

    for (let i = 1; i <= maxNbrSubList; i++) {
      let mySubList = [];
      for (let j = count; j < subListMax; j++) {
        mySubList.push(initialList[j]);
        count++;
      }
      subListMax = subListMax + subListLength;
      if (subListMax > initialList.length) {
        subListMax = initialList.length;
      }
      resultList.push(mySubList);
    }

    resultList.forEach((subList) => {
      console.log(subList);
    });

    return resultList;
  }
  //---------------------< insertItemsToList >----------funciton to create and insert elements to a list
  let insertItemsToList = (classListName, nbr) => {
    let list = document.querySelector("." + classListName);
    for (let i = 1; i <= nbr; i++) {
      let listItem = document.createElement("div");
      listItem.classList.add("listItem");
      list.appendChild(listItem);
    }
  };
  //---------------------< emptyList >------------------funciton remove all  elements of a list  
  let emptyList = (classListName) => {
    let list = document.querySelector("." + classListName);
    let listItems =  [].slice.call(list.children);
    listItems.forEach(child =>{
      child.remove()
    })
  };

  //¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤ main code
  // let objectIds = ["1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2"];
  // getSublists(objectIds, 1);
  let inputs = document.querySelectorAll(".J1_input");
  let tempList = [];
  let sublistsContainer = document.querySelector('.sublistsContainer')

  inputs[0].addEventListener("click", () => {
    emptyList("initialList");
    insertItemsToList("initialList",parseInt(inputs[0].value));  
    tempList = Array.from(document.querySelector(".initialList").children)
  });

  inputs[1].addEventListener("click", () => {
    emptyList("sublistsContainer");
    console.log('sublistsContainer : befor'+ sublistsContainer)
    let slicedList = getSublists(tempList, parseInt(inputs[1].value)); 
    console.log(slicedList)
    slicedList.forEach((subList) =>{
      const tempSubList = document.createElement('div');     
      tempSubList.classList.add('subList');
      for(let i=0; i<subList.length;i++){
        tempSubList.appendChild(subList[i])
      }
      sublistsContainer.appendChild(tempSubList)
    })
    console.log('sublistsContainer : after'+ sublistsContainer)

  });

  
};// this is the js code running for this job
