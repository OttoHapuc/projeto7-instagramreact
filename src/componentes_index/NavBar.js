export default function NavBar() {
    return (
        <header class="topo flex-box">
            <div class="cabecalho flex-box just-be alig">
                <div class="logo flex-box alig">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img src="./images/logo.png" alt="" />
                </div>
                <div class="pesquisa">
                    <input type="text" placeholder="pesquisa" />
                </div>
                <div class="navegacoes">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </header>
    )
}