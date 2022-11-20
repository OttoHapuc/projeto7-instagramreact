import reactDom from "react-dom";
import NavBar from "./componentes_index/NavBar";
import Corpo from "./componentes_index/Corpo"
function App() {
    return (
        <div>

            <NavBar />

            <Corpo />
            
            <footer className="bar-phone flex-box just-be alig">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </footer>
        </div>
    )
}

reactDom.render(App(), document.querySelector('.root'))