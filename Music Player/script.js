const allSongs = document.querySelector("#all-songs");
const poster =document.getElementById("left");
const play = document.getElementById("play");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");
let flag=0;
const obj =[
    {title:"Satranga",image:"https://i.pinimg.com/736x/ac/05/be/ac05be699745801fc0c1c57b61a23797.jpg",url:"https://pagalnew.com/128-downloads/44104",duration:"4:31"},
    {title:"Tum Se Hi",image:"https://i.pinimg.com/736x/2c/ca/1c/2cca1cd513e1b63534d659459501b480.jpg",url:"https://pagalnew.com/128-downloads/9293",duration:"5:21"},
    {title:"Dilliwaali Girlfriend",image:"https://i.pinimg.com/1200x/99/42/a6/9942a6e3a4fa183188e8d257fc6a8e99.jpg",url:"https://pagalnew.com/128-downloads/6103",duration:"4:20"},
    {title:"Tu Jaane Na",image:"https://i.pinimg.com/1200x/17/a8/96/17a8967f12bd186cba79c7ed1e1e6eda.jpg",url:"https://koshalworld.com/files/download/id/14100",duration:"5:43"},
    {title:"Mast Magan",image:"https://i.pinimg.com/736x/9b/5a/37/9b5a371f2eb8facf6bcc1496bb54af32.jpg",url:"https://pagalnew.com/128-downloads/5376",duration:"4:40"},
];

let selectedSong = 0;
var audio = new Audio();

function mainFunction(){
    let clutter = "";   

    obj.forEach((element,index)=>{
        clutter += 
        `<div class="song-card" id=${index}>
            <div class="part1">
            <img src=${element.image} alt="">
            <h2>${element.title}</h2>
            </div>
            <h6>${element.duration}</h6>
        </div>`;
    });

    allSongs.innerHTML= clutter;
    audio.src=obj[selectedSong].url;
    poster.style.backgroundImage =`url(${obj[selectedSong].image})`;
}
mainFunction();


allSongs.addEventListener("click",(dets)=>{
    selectedSong=Number(dets.target.id);
    mainFunction();
    audio.play();
    play.innerHTML=`<i class="ri-pause-mini-line"></i>`;
    flag=1;
})

play.addEventListener("click",function(){
    if (!flag){
        play.innerHTML=`<i class="ri-pause-mini-line"></i>`;
        audio.play()
        flag=1;
    }
    else {
        play.innerHTML=`<i class="ri-play-fill"></i>`;
        flag=0;
        audio.pause();
    }
})

forward.addEventListener("click",function(){
    selectedSong = (selectedSong + 1) % obj.length;
    play.innerHTML=`<i class="ri-pause-mini-line"></i>`;
    mainFunction();
    audio.play();
    flag=1;
})

backward.addEventListener("click",function(){
    selectedSong = (selectedSong - 1)<0?obj.length-1:selectedSong-1;
    play.innerHTML=`<i class="ri-pause-mini-line"></i>`;
    mainFunction();
    audio.play();
    flag=1;
})

audio.addEventListener("ended", () => {
    // Move to the next song
    selectedSong = (selectedSong + 1) % obj.length;

    // Update UI and audio source
    mainFunction();
    audio.play();
    play.innerHTML = `<i class="ri-pause-mini-line"></i>`;
    flag = 1;
});



// responsive
// const menuBtn = document.querySelector("#menu-btn");
// const right = document.querySelector("#right");
// const overlay = document.querySelector("#overlay");

// let menuOpen = false;

// function toggleMenu(){
//   menuOpen = !menuOpen;
//   right.classList.toggle("active");
//   overlay.classList.toggle("active");

//   menuBtn.innerHTML = menuOpen
//     ? `<i class="ri-close-line"></i>`
//     : `<i class="ri-menu-line"></i>`;
// }

// menuBtn.addEventListener("click", toggleMenu);
// overlay.addEventListener("click", toggleMenu);

// if (window.innerWidth <= 768) {
//   right.classList.remove("active");
//   overlay.classList.remove("active");
//   menuOpen = false;
//   menuBtn.innerHTML = `<i class="ri-menu-line"></i>`;
// }

const menuBtn = document.querySelector("#menu-btn");
const right = document.querySelector("#right");
const overlay = document.querySelector("#overlay");

let menuOpen = false;

function toggleMenu(){
  menuOpen = !menuOpen;

  right.classList.toggle("active");
  overlay.classList.toggle("active");

  menuBtn.innerHTML = menuOpen
    ? `<i class="ri-close-line"></i>`
    : `<i class="ri-menu-line"></i>`;

  menuBtn.classList.toggle("open", menuOpen);
}


menuBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

