for(i=1; i<13; i++){
 let postWrap = document.querySelector(".post_wrap")
 let postBox = document.createElement("div")
 postBox.className="post_box"
 postBox.innerHTML=`
 <img src="./img/feed_img${1}.JPG" alt="x">
 <div class="comment_box">
  <ul>
   <li><img src="./img/explore_commet.png" alt="x"><p>0</p></li>
   <li><img src="./img/explore_heart.png" alt="x"><p>0</p></li>
  </ul>
 </div>`
postWrap.appendChild(postBox)

let reelswrap = document.querySelector(".reels_wrap")
let reelsBox = document.createElement("div")
reelsBox.className = "reels_box"
reelsBox.innerHTML = `<img src="./img/feed_img${i}

<img src="./img/feed_img1.JPG" alt="x">
<div class="comment_box2">
 <ul>
  <li><img src="./img/explore_commet.png" alt="x"><p>0</p></li>
  <li><img src="./img/explore_heart.png" alt="x"><p>0</p></li>
 </ul>`


 let tagWrap = document.querySelector(".post_wrap")
 let tagBox = document.createElement("div")
 tagBox.className="tag_box"
 tagBox.innerHTML=`
 <img src="./img/feed_img${i}.JPG" alt="x">
 <div class="comment_box3">
  <ul>
   <li><img src="./img/explore_commet.png" alt="x"><p>0</p></li>
   <li><img src="./img/explore_heart.png" alt="x"><p>0</p></li>
  </ul>
 </div>`
tagWrap.appendChild(tagBox)


tagWrap.style.display="none"
reelsWrap.style.display="none"
}

/* let Reels = document.querySelector("#post")
function reelsClick(){
 reelswrap.computedStyleMap.display="block"
}
Reels.addEventListener("click",reelsClick)
} */
