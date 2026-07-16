const episodes=[

{

    title:"Episode 1 - NBA Finals Recap",
    description:"Breaking down every game of the NBA Finals.",
    image:"images/episode1.jpg",
    audio:"audio/episode1.mp3",
    duration:"45 min"

    },

    {

    title:"Episode 2 - NFL Training Camp",
    description:"Everything to watch before the season begins.",
    image:"images/episode2.jpg",
    audio:"audio/episode2.mp3",
    duration:"52 min"

    },

    {

    title:"Episode 3 - MLB Trade Deadline",
    description:"Winners and losers from this year's deadline.",
    image:"images/episode3.jpg",
    audio:"audio/episode3.mp3",
    duration:"38 min"

}

];


const list=document.getElementById("episodes");

    episodes.forEach((episode,index)=>{

const card=document.createElement("div");

    card.className="episode";

    card.innerHTML=`

    <div class="left">

        <img src="${episode.image}">

        <div>

            <h3>${episode.title}</h3>

            <p>${episode.description}</p>

        </div>  

    </div>

<div class="duration">

    ${episode.duration}

</div>

`;

card.onclick=()=>playEpisode(index);

list.appendChild(card);

});

function playEpisode(index){

const ep=episodes[index];

    document.getElementById("episode-title").textContent=ep.title;

    document.getElementById("episode-description").textContent=ep.description;

    document.getElementById("episode-image").src=ep.image;


const player=document.getElementById("audioPlayer");

    document.getElementById("audioSource").src=ep.audio;

player.load();

player.play();

}