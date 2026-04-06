function execute(url) {
    var response = fetch(url);
    if (response.ok) {
        var doc = response.html();
        var data = [];
        var el = doc.select("a[href*='/chuong-']");
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.text(),
                url: e.attr("href"),
                host: "https://aitruyen.net"
            });
        }
        return Response.success(data);
    }
    return null;
}
