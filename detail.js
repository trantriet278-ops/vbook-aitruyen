function execute(url) {
    var response = fetch(url);
    if (response.ok) {
        var doc = response.html();
        return Response.success({
            name: doc.select("h1").text(),
            cover: doc.select("img.rounded-md").attr("src"),
            author: doc.select("a[href*='tac-gia']").text(),
            description: doc.select(".line-clamp-5").text(),
            host: "https://aitruyen.net"
        });
    }
    return null;
}
