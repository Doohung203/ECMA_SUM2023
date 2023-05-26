import { Footer } from "../components/footer";
import { Header } from "../components/header";

const AboutPage = () =>{
    return `
        ${Header()};
        <h1>About Page</h1>
        ${Footer()};
    `
}

export default AboutPage;