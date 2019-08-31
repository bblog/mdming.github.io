document.querySelector('.video-list').addEventListener("click", (function (e) {
    var li = document.querySelectorAll('.video-list li')
   var video=document.querySelector('.video video')
    for (var i = 0; i < li.length; i++) {
        if (e.target == li[i]) {
            switch (i) {
                case 2:
                    video.src = "http://s3.pstatp.com/aweme/resource/web/static/image/index/tvc-v3_4138031.mp4";
                    break;
                case 3:
                    video.src = "lizhi.mp4";
                    break;
                case 4:
                    video.src = "dibai.mp4";
                    break;
                case 5:
                    video.src = "nanning.mp4";
                    break;
                case 6:
                    video.src = "wuhan.mp4";
                    break;
                case 7:
                    video.src = "lixiang.mp4";
                    break;
            }


            console.log(i)
        }
    }

}))
document.querySelector('#muted').addEventListener("click", (function (e) {
if(document.querySelector('#muted i').classList.contains("fa-volume-up")){
    document.querySelector('.video video').muted=true;

}
else{
    document.querySelector('.video video').muted=false;

}
document.querySelector('#muted i').classList.toggle("fa-volume-up");

    document.querySelector('#muted i').classList.toggle("fa-volume-mute");

    console.log('1111')

}))