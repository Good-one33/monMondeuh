let f8 = ()=>{
    console.log('f8 is running')
    // this will load the style for the job 
    document.querySelector('#jobStyle').setAttribute('href','CSS/modularCss/s'+6+'.css')   
    
    // this will load the html content
    jobDisplayDiv.innerHTML = `
    <!-- page 3 _03_08_2021_-->
        <div id="pc3" class="pageContent">
          <img
            src="/mon-site/Images/bebe_codding.JPG"
            alt="baby boy"
            width="300px"
            style="box-shadow: 10px 10px 15px grey"
          />
          <br />
          <br />
          Today is a great day,it's my birthday, in a tuesday like this one, at
          3 am in the morning I opened my eyes for the first time and I said
          <i>" Hello world it's me, Abdelmalek :) "</i>. <br />
          This afternoon I was laying in the bad and I started thinking and
          imagining the world without me, like what if I didn't existe what will
          change ? and to be honest I didn't find a significant contribution,
          till now my life is like a 7 billion people's life in this world.
          <br />
          I always dreamed big, I had a bunch of amazing things that I wanted to
          do but something was stopping me, I was afraid ! the fear of not
          getting things done, fear of being rejected, but this was the past,
          now I am seeing things differently I will go all the way to be the
          person I always wanted to be,<br />
          <i> wish me a good luck and a happy birthday :)</i>
        </div>`

    // this is the js code running for this job 

}////////// don't delete me 