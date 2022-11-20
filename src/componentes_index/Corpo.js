import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar"
export default function Corpo() {
    return (
        <main className="flex-box row just-be">
            <div className="main">
                <Stories />
                <Posts />
            </div>
            <SideBar />
        </main>
    )
}