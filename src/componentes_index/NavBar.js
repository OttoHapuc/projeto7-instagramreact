export default function NavBar() {
    return (
        <header className="topo flex-box">
            <div className="cabecalho flex-box just-be alig">
                <div className="logo flex-box alig">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img src="./images/logo.png" alt="" />
                </div>
                <div className="pesquisa">
                    <input type="text" placeholder="pesquisa" />
                </div>
                <div className="navegacoes">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </header>
    )
}