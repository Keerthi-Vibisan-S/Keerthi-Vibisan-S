let text = document.getElementById("hero-name");
let heroname = text.textContent;
let nameSplit = heroname.split("");

//Making it to null because down i will add all letters with span and text already copied to heroname variable
text.textContent = null;

console.log(nameSplit);

for(let i = 0; i<nameSplit.length; i++)
{
    //+= adding all letters into seperate span
    text.innerHTML += '<span class="pop-up">'+nameSplit[i]+"</span>";
}

let char = 0;
let intro = setInterval(intoAnimation,50);

function intoAnimation()
{
    let eachLetter = document.querySelectorAll(".pop-up")[char];
    eachLetter.classList.add("intro-Fade-in");
    char++;

    if(char == nameSplit.length)
    {
        clearInterval(intro);
        //Clear interval is enought to confirm it ==null
        intro = null;
    }
}