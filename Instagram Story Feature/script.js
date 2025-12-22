let arr=[{dp:"https://images.unsplash.com/photo-1534008757030-27299c4371b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHwwfDB8fHww",story:"https://plus.unsplash.com/premium_photo-1669704099138-fb0296eb742c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxtb2RlbHxlbnwwfDB8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1637834282666-e8cf6bcbe312?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHxtb2RlbHxlbnwwfDB8MHx8fDA%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1682095754287-7ae4fbc5fe11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1667520100122-76f94987ce8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzYxfHxtb2RlbHxlbnwwfDB8MHx8fDA%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1669704098824-3bb06bb771f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHwwfDB8fHww",story:"https://images.unsplash.com/photo-1623544760978-b66b1ececd2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc4fHxtb2RlbHxlbnwwfDB8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHwwfDB8fHww",story:"https://images.unsplash.com/photo-1667419984236-d0a6813d53d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgyfHxtb2RlbHxlbnwwfDB8MHx8fDA%3D"}
]

clutter="";
arr.forEach(function(elem,idx){
    clutter +=`<div class="story"><img id="${idx}" src="${elem.dp}" alt=""></div>`
});

const storyian=document.querySelector(".storyian");
storyian.innerHTML=clutter;

storyian.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block"; 
    document.querySelector("#full-screen").style.backgroundImage=`url(${ arr[dets.target.id].story})`; 
    
    setTimeout(() => {
        document.querySelector("#full-screen").style.display="none"; 
    }, 1000);
});

