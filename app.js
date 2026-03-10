const table=document.getElementById("tableBody")

async function loadProjects(){

for(const project of PROJECTS){

const url=`https://api.github.com/repos/${project.repo}`

const res=await fetch(url)

const data=await res.json()

const row=document.createElement("tr")

row.innerHTML=`

<td>${project.name}</td>
<td>${data.stargazers_count}</td>
<td>${data.forks_count}</td>
<td>${data.open_issues_count}</td>
<td>${data.updated_at}</td>

`

table.appendChild(row)

}

}

loadProjects()
