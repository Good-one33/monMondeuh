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
        <input type="number" class="J1_input" min="0" max="100" value="11">
        </div>
        <div class="J1_subContainer_2">
        Row's length
        <input type="number" class="J1_input" min="1" max="100" value="3">
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

    // resultList.forEach((subList) => {
    //   console.log(subList);
    // });

    return resultList;
  }
  //---------------------< insertItemsToList >----------funciton to create and insert elements to a list
  let insertItemsToList = (classListName, nbr, randomColor) => {
    let list = document.querySelector("." + classListName);
    for (let i = 1; i <= nbr; i++) {
      let listItem = document.createElement("div");
      listItem.classList.add("listItem");
      if (randomColor) {
        listItem.style.backgroundColor =
          "rgb(" +
          String(randomNumber(225)) +
          ", " +
          String(randomNumber(225)) +
          "," +
          String(randomNumber(225)) +
          "  )";
      }
      list.appendChild(listItem);
    }
  };
  //---------------------< emptyList >------------------funciton that remove all  elements of a list
  let emptyList = (classListName) => {
    let list = document.querySelector("." + classListName);
    let listItems = [].slice.call(list.children);
    listItems.forEach((child) => {
      child.remove();
    });
  };
  //---------------------<randomNumber>------------------funciton that generate random number between 0 and the input param
  let randomNumber = (inputNbr) => {
    return Math.floor(Math.random() * inputNbr + 1);
  };

  //¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤ main code
  let inputs = document.querySelectorAll(".J1_input");
  let tempList = [];
  let sublistsContainer = document.querySelector(".sublistsContainer");
  let generateBtn = document.querySelector("button");

  generateBtn.addEventListener("click", () => {
    //sublists
    emptyList("initialList");
    insertItemsToList("initialList", parseInt(inputs[0].value), true);
    tempList = Array.from(document.querySelector(".initialList").children);
    emptyList("sublistsContainer");
    let slicedList = getSublists(tempList, parseInt(inputs[1].value));
    slicedList.forEach((subList) => {
      const tempSubList = document.createElement("div");
      tempSubList.classList.add("subList");
      for (let i = 0; i < subList.length; i++) {
        tempSubList.appendChild(subList[i]);
      }
      sublistsContainer.appendChild(tempSubList);
    });
    //the main list
    emptyList("initialList");
    insertItemsToList("initialList", parseInt(inputs[0].value), false);
    tempList = Array.from(document.querySelector(".initialList").children);
  });
}; // this is the end of the  js code running for this job
