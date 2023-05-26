import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { projectList } from "../dataFake"


export  const ProjectPage = () =>{
    return `
       ${Header()}   
       <main>
            <div>
                ${projectList.map(function(project){
                    return `
                        <div>
                            <h2>${project.title}</h2>                       
                            <p>${project.content}</p>                       
                        </div>                   
                    `
                }).join("")}
            </div>
       </main>
       ${Footer()}  
    `
}