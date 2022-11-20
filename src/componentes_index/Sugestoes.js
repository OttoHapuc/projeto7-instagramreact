export default function Sugestoes() {
    const sugestoes = [
        {nome: "catanacomics", subnome: "Catana", imagem:"./images/9gag 1.jpg"},
        { nome: "meowed", subnome: "Catana", imagem: "./images/meowed 1.jpg" },
        { nome: "barked", subnome: "Catana", imagem: "./images/barked 1.jpg" },
        { nome: "nathanwpyle...", subnome: "Catana", imagem: "./images/nathanwpylestrangeplanet 1.jpg" }
    ]
    return (sugestoes.map(
        (sugestao)=><ApresentaSugestao 
        nome={sugestao.nome} 
        subnome={sugestao.subnome}
        imagem={sugestao.imagem}
        />
        ))
}

function ApresentaSugestao(props) {
    return(
        <div className="sugestoes flex-box alig">
            <img src={props.imagem} />
            <div className="perfil flex-box just-be alig">
                <div className="perf">
                    <p><strong>{props.nome}</strong><br /></p>
                    <p>{props.subnome}</p>
                </div>
                <span>Seguir</span>
            </div>
        </div>
    )
}