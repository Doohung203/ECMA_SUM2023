import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { projectList } from "../dataFake";
  
const HomePage = () => {
    return `
        ${Header()}
        </main>
           ${projectList.map(function(project){
                return`
                    <h2> ${project.title}</h2>
                    <h2> ${project.content}</h2>
                `
           }).join("")}
    
        </main> 
        ${Footer()}
    `
}
export default HomePage;