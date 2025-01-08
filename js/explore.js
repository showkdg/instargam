// for문으로 12개 돌리기
for(i=1; i<13; i++){
 let exploreWrap = document.querySelector(".explore_wrap")
 let Explore = document.createElement("div")
 Explore.className ="explore_box"
/*  Explore.style.background=`url(../img/) */


Explore.innerHTML=`<div class="explore_img">
     <img src="./img/feed_img1.JPG" alt="x">
    </div>
    <div class="icon">
  <ul>
   <li><img src="./img/explore_heart.png" alt="x"><p>0</p></li>
   <li><img src="./img/explore_commet.png" alt="x"><p>0</p></li>
  </ul>
 </div>   
`

  

 exploreWrap.appendChild(Explore)
}