function execute(key, page) {
    var url = "https://aitruyen.net/tim-kiem?q=" + key;
    var response = fetch(url);
    if (response.ok) {
        var doc = response.html();
        var data = [];
        var el = doc.select(".grid div.relative"); 
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("h3").text(),
                link: e.select("a").first().attr("href"),
                cover: e.select("img").attr("src"),
                host: "https://aitruyen.net"
            });
        }
        return Response.success(data);
    }
    return null;
}
