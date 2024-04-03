let cards=document.querySelectorAll('.card');
let isFlip=false;
let first;
let second;

cards.forEach((card)=>{
    card.addEventListener('click',flip);
})
function flip(){
    this.classList.toggle("flip");
    if(!isFlip){
        first=this;
        isFlip=true;
    }
    else{
        second=this;
        check();
    }
}
function check(){
    console.log("checking");
    let img1=first.querySelector('img');
    let img2=second.querySelector('img');
    if(img1.src===img2.src){
        success();
    }
    else{
        failed();
    }
}
function success(){
    first.removeEventListener('click',flip);
    second.removeEventListener('click',flip);
    isFlip=false;
    first=null;
    second=null;
}
function failed(){
    setTimeout(()=>{
        first.classList.remove('flip');
        second.classList.remove('flip');
        first=null;
        second=null;
        isFlip=false;
    },1000);
}
(function mix(){
    cards.forEach((card)=>{
        let index=Math.floor(Math.random()*16);
        card.style.order=index;
    })
})();