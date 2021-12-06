window.onload = function () {
    for(var i = 0; i < 5; ++i){
        var block = document.getElementById("block_" + (i + 1).toString());
        get_information(index_articles[i], function(text) {
            var div = document.createElement("div");
            div.innerHTML = text.trim();
            article_title = div.getElementsByClassName("article_title")[0].innerHTML;
            article_description = div.getElementsByClassName("article_description")[0].innerHTML;
            title_image_src = div.getElementsByClassName("title_image")[0].src;
            block.getElementsByClassName("title_image")[0].src = title_image_src;
            block.getElementsByClassName("card_title")[0].innerHTML = article_title;
            block.getElementsByClassName("card_description")[0].innerHTML = article_description;
            block.href = index_articles[i];
        });
    }
}

function get_information(link, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", link, false);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(xhr.response);
        }
    };
    xhr.send(null);
}