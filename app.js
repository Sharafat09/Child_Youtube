const imgLI=document.querySelectorAll(".imgLI");
const playVid=document.querySelector("#playVid");
const vidioPlayer=document.querySelector("#vidioPlayer");
const bottom=document.querySelector(".bwrap");
const PhotoWraper=document.querySelector(".SegPhotoWraper");
const Imgepart2=document.querySelectorAll(".Imgepart2");
const play=document.querySelector("#play");
const progress=document.querySelector("#progress");
const currentTimeEliment=document.querySelector(".current");
const durationTimeEliment=document.querySelector(".duration");
const video=document.querySelector("video");

//..........currenttime...........................//
const currentTime = ( )=>{
    let currentMinuts= Math.floor(playVid.currentTime/60)
    let currentSeconds=Math.floor(playVid.currentTime - currentMinuts * 60)
    let durationMinuts=Math.floor(playVid.duration / 60)
    let durationSeconds=Math.floor(playVid.duration - durationMinuts * 60)

    currentTimeEliment.innerHTML = `${currentMinuts}: ${currentSeconds}`
    durationTimeEliment.innerHTML = `${durationMinuts}: ${durationSeconds}`
}

playVid.addEventListener( 'timeupdate' , currentTime)
//..................currenttime.......................................


play.addEventListener("click"  , ()=>{
    if(playVid.paused){
        playVid.play();
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        playVid.pause();
        document.querySelector("#play").classList.replace("fa-pause" , "fa-play")
    }
})



progress.addEventListener('input' , ()=>{    
    playVid.currentTime=progress.value;
    progress.max=playVid.duration;    
});

playVid.addEventListener('timeupdate' , ()=>{
    progress.value=playVid.currentTime;
    playVid.max=progress.duration;
});



imgLI[0].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj1.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")        
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }    
})



imgLI[1].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj2.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
   
})

imgLI[2].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj3.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[3].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj4.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[4].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj5.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[5].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj6.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[6].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj7.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[7].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj8.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[8].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj9.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[9].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj10.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[10].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj11.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[11].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj12.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[12].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj13.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[13].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj14.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[14].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj15.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[15].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj16.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[16].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj17.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[17].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj18.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[18].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj19.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

imgLI[19].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj20.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

// .display.................................////////////////////////////////////////////////


Imgepart2[0].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj1.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
  document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")      
    }
})

Imgepart2[1].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj2.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
   
})

Imgepart2[2].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj3.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[3].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj4.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[4].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj5.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[5].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj6.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[6].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj7.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[7].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj8.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[8].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj9.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[9].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj10.mp4";
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[10].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj11.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[11].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj12.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[12].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj13.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[13].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj14.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[14].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj15.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[15].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj16.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[16].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj17.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[17].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj18.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[18].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj19.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})

Imgepart2[19].addEventListener("click" , ()=>{
    vidioPlayer.style.display="block";
    bottom.style.display="none";
    playVid.src="video/siraj20.mp4"
    if(playVid.paused){
        playVid.play()
        document.querySelector("#play").classList.replace("fa-play" , "fa-pause")
    }
    else{
        document.querySelector("#play").classList.replace("fa-pause"  , "fa-play")
    }
})
