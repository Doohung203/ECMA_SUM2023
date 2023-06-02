import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Navigo from "navigo"
import { ProjectPage } from "./pages/Project";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectDetail from "./pages/ProjectDetail";

const app = document.querySelector("#app"); //tìm phần tử html có id là app
const router = new Navigo('/'); //khởi tạo router từ đối tượng Navigo

const render = (content, container) => {
    return container.innerHTML = content();
}

router.on(('/'), () => {  //sử dụng phương thức on để khai báo đường dẫn đến từng page
    return render(HomePage, app)
})

router.on(('/about'), () => {
    return render(AboutPage, app)
})

router.on(('/project'), () => {
    return render(ProjectPage, app)
})

router.on(('/project/:id'), ({data}) => {
    return render(() => {
        return ProjectDetail(data);
    }, app)
})
router.notFound(() => {
    return render(NotFoundPage, app)
})
router.resolve(); //sử dụng phương thức resolve để thực thi 


