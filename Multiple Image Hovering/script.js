const elem=document.querySelectorAll(".elem");
const elemImage=document.querySelectorAll(".elem img");

for (let i=0;i<elem.length;i++){
    elem[i].addEventListener("mouseenter",function(){
        elemImage[i].style.opacity=1;
        elemImage[i].style.left=`${dets.x}px`;
        elemImage[i].style.top=`${dets.y}px`;
    });
    
    elem[i].addEventListener("mouseleave",function(){
        elemImage[i].style.opacity=0;
    });
    
    elem[i].addEventListener("mousemove",function(dets){
        elemImage[i].style.left=`${dets.x}px`;
        elemImage[i].style.top=`${dets.y}px`;
    }); 
}