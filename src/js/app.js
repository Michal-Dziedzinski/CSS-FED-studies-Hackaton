window.onload = function(){

    var BODY = this.document.querySelector('body'),
        //video
        video_mod = this.document.querySelector('[data-video]'),
        video_el = video_mod.querySelector('video'),
        btn_pause = video_mod.querySelector('[data-pause-btn]'),
        btn_play = video_mod.querySelector('[data-play-btn]'),
        vid_progress = video_mod.querySelector('[data-progress]'),
        is_playing = false;

    // video control
    btn_play.onclick = function(){
        video_el.play();
        is_playing = true;
        video_mod.classList.add('is-playing');
    };
    btn_pause.onclick = function(){
        video_el.pause();
        is_playing = false;
        video_mod.classList.remove('is-playing');
    };
    video_el.ontimeupdate = function(){
        vid_progress.style.width = Math.ceil(video_el.currentTime / video_el.duration * 100) + '%';
    };
    video_el.onended = function(){
        video_el.currentTime = 0;
        video_el.pause();
        is_playing = false;
        video_mod.classList.remove('is-playing');
    };
}

