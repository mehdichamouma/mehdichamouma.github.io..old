var css  = require('../styles/main.css');

var nameElement = document.querySelector(".name");
var firstname = nameElement.dataset.firstname;
var lastname = nameElement.dataset.lastname.toUpperCase();

var cursor = document.createElement("span")
cursor.className = "cursor cursor-enabled"
//cursor.innerHTML = "|"
nameElement.parentNode.insertBefore(cursor, nameElement.nextSibling);
var firstnameElement = document.createElement("span")
var lastnameElement = document.createElement("span")
firstnameElement.className = "firstname"
lastnameElement.className = "lastname"
nameElement.appendChild(firstnameElement)
nameElement.appendChild(lastnameElement)

let step = (i = 0) => {
  let flag = true
  if(i <= firstname.length) {
    firstnameElement.innerHTML = firstname.substring(0, i)

  }
  else if (i < lastname.length + lastname.length) {
    lastnameElement.innerHTML = lastname.substring(0, i - firstname.length)
  }
  else {
    cursor.className = "cursor"
  }
  if (flag) {
    setTimeout(step, 10 + Math.round(200 * Math.random()), i + 1)
  }
}

step()

var projects = document.querySelector("#projects")
var data = require("./projects.json")

data.projects.forEach(p => {
  var project = document.createElement("div")
  var source = ""
  if(p.source) {
    source = `(<a href="${p.source}">source</a>)`
  }
  project.className = "col-xs-12 col-md-4 col-lg-3"
  project.innerHTML = `
    <div class="project">
        <div class="media">
            <img src="${p.img}" alt="">
        </div>
        <h3>${p.title} ${source}</h3>
        <p class="desc">
          ${p.description}
        </p>
        <p class="keywords">
          ${p.keywords.join(", ")}
        </p>
    </div>
  `
  projects.appendChild(project)
})
