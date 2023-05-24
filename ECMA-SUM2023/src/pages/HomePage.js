import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { postList } from "../dataFake";
  
const HomePage = () => {
    return `
        ${Header()}
        </main>
           ${postList.map(function(post){
                return`
                    <h2> ${post.title}</h2>
                    <h2> ${post.content}</h2>
                `
           }).join("")}
    
        </main> 
        ${Footer()}
    `
}
export default HomePage;