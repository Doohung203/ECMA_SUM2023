import { menuList } from "../dataFake"
export const Header = () => {
    return `
        ${menuList.map(function (menu) {
        return `
                <header>
                    <nav>
                        <ul>
                            <li><a href='/'>${menu.name}</a></li>
                            
                        </ul>
                    </nav>
                    <img src="https://picsum.photos/1200/500" /> 
                 </header>
            `
            }).join()
        }`
}
