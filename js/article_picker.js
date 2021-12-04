window.onload = function () {
    console.log(article_list);
    for(var i = 0; i < article_list.length; i++){
        var article_block = document.createElement("div");
        article_block.setAttribute("class", "titled_block");
        article_block.innerHTML = document.getElementById("block_to_create").innerHTML;
        article_block.innerHTML = article_block.innerHTML.replace(/{BLOCKTITLE}/g, article_list[i][0]);
        var id = article_list[i][0].replace(/\s/g, '_');
        article_block.innerHTML = article_block.innerHTML.replace(/{BLOCKID}/g, id);
        document.getElementsByClassName("articles_container")[0].appendChild(article_block);
        for(var j = 0; j < article_list[i][1].length; j++){
            var path = article_list[i][1][j];
            get_information(path, function(text) {
                var div = document.createElement("div");
                div.innerHTML = text.trim();
                article_title = div.getElementsByClassName("article_title")[0].innerHTML;
                article_description = div.getElementsByClassName("article_description")[0].innerHTML;
                title_image_src = div.getElementsByClassName("title_image")[0].src;
                var article = document.createElement("div");
                article.setAttribute("class", "article_container");
                article.innerHTML = document.getElementById("article_to_create").innerHTML;
                article.innerHTML = article.innerHTML.replace(/{TITLE}/g, article_title);
                article.innerHTML = article.innerHTML.replace(/{DESC}/g, article_description);
                article.innerHTML = article.innerHTML.replace(/{SRC}/g, title_image_src);
                article.innerHTML = article.innerHTML.replace(/{HREF}/g, path);
                document.getElementById(id).appendChild(article);
            });
        }
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