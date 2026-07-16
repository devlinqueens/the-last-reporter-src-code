fetch("/api/sports/highlights?query=worldcup2026")
.then(response => response.json())
.then(videos => {

    let container = document.getElementById("highlights");

    videos.forEach(video => {

        container.innerHTML += `

        <div class="video-card">

        <img src="${video.thumbnail}">

        <h3>${video.title}</h3>

        <iframe
        src="https://www.youtube.com/embed/${video.videoId}">
        </iframe>

        </div>

        `;

    });

});