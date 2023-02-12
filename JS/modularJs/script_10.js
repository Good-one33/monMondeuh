let f10 = ()=>{
    console.log('f10 is running')
    // this will load the style for the job 
    document.querySelector('#jobStyle').setAttribute('href','CSS/modularCss/s'+6+'.css')   
    
    // this will load the html content
    jobDisplayDiv.innerHTML = `<!-- page 6 _21_12_2021_-->
    <div id="pc6" class="pageContent">
      <div id="pc6demo1"></div>
      <div id="pc6demo">coucou c'est moi</div>
      <!-- input  -->
      <div id="pc6input">
        <p>It's your first time here, please let we know more about you</p>
        <p>Name: <input type="text" id="pc6Name" /></p>
        <p>age: <input type="number" id="pc6Age" /></p>
        <p>
          current mode
          <select name=" currentMode" id="pc6Mode">
            <option value="good">good</option>
            <option value="very good">very good</option>
            <option value="normal">normal</option>
            <option value="bad">bad</option>
          </select>
        </p>
        <p>
        <input name="gender" value="male" type="radio" id="pc6rb1"/> male
        <input
            name="gender"
            value="female"
            type="radio"
            id="pc6rb2"
            checked
          />
          female
        </p>
        <p>color you like: <input type="color" id="pc6Color" /></p>
        <button id="pc6click1">ok!</button>
      </div>
   
    </div>`
}////////// don't delete me 