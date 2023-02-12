let f5 = ()=>{

    jobDisplayDiv.innerHTML = `<!-- page 6 _21_12_2021_-->
    <div id="pc6" class="pageContent">
      <div id="pc6demo1"></div>
      <div id="pc6demo">coucou it's me f5, Iam runnning !</div>`

    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
      };


let multiplyNumeric = obj => {
    for (let key in obj){
        console.log(key + " : "+ obj[key] );
        obj[key] = obj[key]*2;
        console.log(key + " : "+ obj[key] );

    }
} 

multiplyNumeric(menu);

}////////// don't delete me 