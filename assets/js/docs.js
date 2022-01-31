function htmlFromData(xmlDoc) {
    const article = xmlDoc.getElementsByTagName("Article")[0];
    let html = "";

    html += "<h1>" + article.getElementsByTagName("Title")[0].innerHTML + "</h1>";

    if (article.getAttribute("type") === "code") {
        html += `<p>In <span class="mono">` + article.getElementsByTagName("Path")[0].innerHTML.trim() + `<span></p>`;
        html += `<hr>`;
        html += `<p>` + article.getElementsByTagName("Info")[0].innerHTML + `</p>`;
        html += `<pre class="rounded"><code class="language-marlin" name="marlinCode">` + article.getElementsByTagName("Declaration")[0].innerHTML + `</code></pre>`;
        html += `<hr> <br />`;

        let typeMembers = article.getElementsByTagName("TypeMembers");
        if (typeMembers.length > 0) {
            typeMembers = typeMembers[0].children;
            html += `<h2>Type members</h2>`;
            html += `<table class="table table-dark"><tbody>`;

            for (let i = 0; i < typeMembers.length; i++) {
                const child = typeMembers[i];
                html += `<tr><td><a href="/docs/article.html?` + child.getAttribute("path") + `">` + child.innerHTML + `</a></td></tr>`
            }

            html += `</tbody></table>`;
        }

        let examples = article.getElementsByTagName("Examples");
        if (examples.length > 0) {
            examples = examples[0].children;
            html += `<h2>Examples</h2>`;

            for (let i = 0; i < examples.length; i++) {
                const example = examples[i];
                html += `<h4>` + example.getElementsByTagName("Title")[0].innerHTML + `</h4>`;
                html += `<p>` + example.getElementsByTagName("Info")[0].innerHTML + `</p>`;
                html += `<pre class="rounded"><code class="language-marlin" name="marlinCode">` + example.getElementsByTagName("Code")[0].innerHTML.trim() + `</code></pre>`;
                html += `<br />`;
            }
        }
    }

    return html;
}

const docs = {
    search: function() {
        console.log(123);
    },

    parse: async function(xmlPath) {
        const response = await fetch(xmlPath);

        if (response.ok === false) {
            return null;
        }

        const xmlString = await response.text();
        const parser = new DOMParser();
        const data = parser.parseFromString(xmlString, "text/xml");

        return htmlFromData(data);
    }
}