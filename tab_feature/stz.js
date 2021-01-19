let _$_u_$_ = [];

let __$_tabs_$__ = document.querySelector("tabs");
if (__$_tabs_$__.getAttribute("type") === "vertical") {
    _$_u_$_.push(`
    tabs,
    tab-content  {
        display: inline-block;
    }

    tabs>tab{
        display: block;
    }
    `)
}

_$_u_$_.push(`
tabs>tab:hover {
    cursor: pointer;
}

tab-content>content {
    display: none;
}
`)


function $_$__tabsandtabcontent__$_$(e) {

    let content = document.querySelectorAll("tab-content content")
    for (let i = 0; i < content.length; i++) {
        content[i].style.display = "none"
    }

    let tabLinks = document.querySelectorAll("tabs tab[tab-link]")
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].removeAttribute("active")
    }

    document.querySelector(`tab-content content[content-link="${e.target.getAttribute('tab-link')}"]`).style.display = "block"
    e.target.setAttribute("active", "")

}
document.querySelector("tabs").addEventListener("click", $_$__tabsandtabcontent__$_$, false)

let f = document.querySelectorAll("tabs tab")
for (let i = 0; i < f.length; i++) {
    if (f[i].getAttribute("default") !== null) document.querySelector("tabs tab[default]").click()
    else document.querySelector(`tab-content content[content-link="${f[i].getAttribute('tab-link')}"]`).style.style = "none"
}



//

_$_u_$_ = _$_u_$_.join(" ")
let style = document.createElement("style")
style.innerHTML = _$_u_$_
document.head.appendChild(style)