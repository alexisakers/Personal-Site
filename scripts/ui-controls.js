function makeYouTubeEmbed(videoID) {
    var embed = document.createElement("iframe");
    embed.src = "https://www.youtube.com/embed/" + videoID +"?autoplay=1";
    embed.frameBorder = "0";
    embed.allow = "autoplay; encrypted-media";
    embed.allowFullscreen = true;
    return embed;
}

function loadEmbed(videoID) {
    var image = document.getElementById(videoID);
    var embed = makeYouTubeEmbed(videoID);
    image.parentNode.replaceChild(embed, image);
}
