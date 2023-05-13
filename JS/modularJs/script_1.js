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
        <div class="initialList"></div>
    `;
  //the code running for the job
  //¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤ getSublists ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
  // this function take an iniital list and returns another list containing sublist with a length defined in the second argument
  function getSublists(initialList, subListLength) {
    let resultList = [];
    console.log("initial List " + initialList);
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
  }

  //¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤ insertItemsToList ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
  //funciton to create and insert elements to a list
  let insertItemsToList = (classListName, nbr) => {
    let list = document.querySelector("." + classListName);
    for (let i = 1; i <= nbr; i++) {
      let listItem = document.createElement("div");
      listItem.classList.add("listItem");
      list.appendChild(listItem);
    }
  };

  //¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤ emptyList ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
  //funciton to create and insert elements to a list
  let emptyList = (classListName) => {
    let list = document.querySelector("." + classListName);
    let listItems =  [].slice.call(list.children);
    listItems.forEach(child =>{
      child.remove()
    })
  };

  // let objectIds = ["1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2"];
  // getSublists(objectIds, 3);
  let inputs = document.querySelectorAll(".J1_input");

  inputs[0].addEventListener("change", () => {
    emptyList("initialList");
    insertItemsToList("initialList", inputs[0].value);  

  });

  inputs[1].addEventListener("change", () => {
    let list = document.querySelector(".initialList");
    let listItems =  [].slice.call(list.children);
     getSublists(listItems, inputs[1].value) 
    


  });

  // this is the js code running for this job
};
