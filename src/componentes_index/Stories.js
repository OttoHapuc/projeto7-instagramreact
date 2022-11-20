export default function Stories() {
    const osStories = [
        { nome: "9gag", imagem: "./images/9gag 1.jpg" },
        { nome: "meowed", imagem: "./images/meowed 1.jpg" },
        { nome: "barked", imagem: "./images/barked 1.jpg" },
        { nome: "nathanwpyle...", imagem: "./images/nathanwpylestrangeplanet 1.jpg" },
        { nome: "wawawiwac...", imagem: "./images/wawawiwacomicsa 1.jpg" },
        { nome: "respondeai", imagem: "./images/respondeai 1.jpg" },
        { nome: "meowed2", imagem: "./images/meowed 1.jpg" },
        { nome: "barked2", imagem: "./images/barked 1.jpg" },
        { nome: "nathanwpyl2...", imagem: "./images/nathanwpylestrangeplanet 1.jpg" }
    ]

    return (
        <div className="posicaoDaSetinha">

            <section className="historias flex-box alig">
                <div className="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>

                {osStories.map((storie)=> <ApresentaStorie key={storie.nome} nome={storie.nome} imagem={storie.imagem}/>)}

            </section>
        </div>
    )
}

function ApresentaStorie(props) {
    return (
        <div className="historia">
            <img className="borda" src="./images/stores.jpg" alt="" />
            <img className="image" src={props.imagem} />
            <p>{props.nome}</p>
        </div>
    )
}