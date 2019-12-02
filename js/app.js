var vid = document.querySelectorAll("video");
vid.forEach(function (video) {
    video.classList.forEach(function (className) {
        debugger;
        switch (className) {
            case "fast":
                video.playbackRate = 2
            case "faster":
                video.playbackRate = 6
            case "fastest":
                video.playbackRate = 16
            default:
                video.playbackRate = 1
        }
    })
})