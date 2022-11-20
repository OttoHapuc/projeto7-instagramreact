import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"
export default function SideBar() {
    return (
        <div className="agregado">

            <Usuario />
            
            <div className="sugestao flex-box just-be">
                <p>Sugestões para você</p>
                <p><strong>Ver tudo</strong></p>
            </div>

            <Sugestoes />

            <div className="letras-pequenas">
                <p>
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                    Localizações • Contas mais relevantes • Hashtags • Idioma
                </p>
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    )
}