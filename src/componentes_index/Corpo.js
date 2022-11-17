import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar"
export default function Corpo() {
    return (
        <main class="flex-box row just-be">
            <div class="main">
                <Stories />
                <Posts />
            </div>
            <SideBar />
        </main>
    )
}