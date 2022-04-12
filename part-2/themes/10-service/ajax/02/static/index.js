let req = new XMLHttpRequest()

req.onload = function () {
    if (req.status === 200) {
        let arr = JSON.parse(req.responseText)
        let lines = "<tr><th>name</th><th>age</th></tr>"
        for (let obj of arr) {
            lines += '<tr>'
            lines += `<td width="60%">${obj["name"]}</td>`
            lines += `<td>${obj["age"]}</td>`
            lines += '</tr>'
        }
        document.getElementById("content").innerHTML = lines
    }
}

req.open("GET", "/static/data.json", true)

req.send(null)
