import { projectList } from "../dataFake";

const ProjectDetail = (data) => {
    const currentProject = projectList.find((project) => { //tìm kiếm id data trong projectList gán vào biến currentProject
        return project.id == data.id;
    })
    if(currentProject){
        return `
            <h1>Detail Page</h1>
            <h2>${currentProject.title}</h2>
            <h2>${currentProject.content}</h2>
        `
    }
    return `<h1>Project không tồn tại</h1>`
}

export default ProjectDetail;