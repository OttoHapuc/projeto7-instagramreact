export default function Posts() {
    const publicacoes = [
        {
            imagem: "./images/9gag 1.jpg",
            nome: "9gag",
            publication: {
                imagem: "./images/gato-telefone 1.jpg",
                curtidoPor: ["repondeai"],
                qtdCurtidas:"101.523"
            }
        },
        {
            imagem:"./images/9gag 1.jpg",
            nome:"9gag",
            publication:{
                imagem:"./images/dog 1.jpg",
                imagemCurtida:"./images/respondeai 1.jpg",
                curtidoPor:"respondeai",
                qtdCurtidas:"101.503"
            }
        }
    ]
    return (
        <section className="publicacoes">

            {publicacoes.map((publicacao)=> 
            <ApresentaPosts 
            key={publicacao.nome}
            imagem={publicacao.imagem} 
            nome={publicacao.nome}
            publication={publicacao.publication}
            />)}

            <div className="publicacao">
                <header className="flex-box just-be alig">
                    <div className="publicador flex-box alig">
                        <img src="./images/9gag 1.jpg" />
                        <p><strong>9gag</strong></p>
                    </div>
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </header>
                <video
                    className="video-publicacao"
                    src="./images/video.mp4"
                    autoPlay
                    muted
                    controls
                ></video>
                <footer>
                    <div className="reacoes flex-box just-be alig">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    <div className="quem-curtiu flex-box alig">
                        <img src="./images/respondeai 1.jpg" alt="" />
                        <p>
                            Curtido por <strong>respondeai</strong> e
                            <strong>outras 101.523 pessoas</strong>
                        </p>
                    </div>
                </footer>
            </div>
        </section>
    )
}

function ApresentaPosts(props) {
    console.log(props)
    return(
        <div className="publicacao">
                <header className="flex-box just-be alig">
                    <div className="publicador flex-box alig">
                        <img src={props.imagem} />
                        <p><strong>{props.nome}</strong></p>
                    </div>
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </header>
                <img className="img-puclicacao" src={props.publication.imagem} alt="" />
                <footer>
                    <div className="reacoes flex-box just-be alig">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    <div className="quem-curtiu flex-box alig">
                        <img src={props.publication.imagemCurtida} alt="" />
                        <p>
                            Curtido por <strong>{props.publication.curtidoPor}</strong> e
                            <strong>outras {props.publication.qtdCurtidas} pessoas</strong>
                        </p>
                    </div>
                </footer>
            </div>
    )
}