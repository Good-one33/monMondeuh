let f5 = ()=>{

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