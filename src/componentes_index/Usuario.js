import React, { useState } from "react"
export default function Usuario() {
    const [nome, setNome] = useState("Catana")
    const [foto, setFoto] = useState("./images/9gag 1.jpg")
    return (
        <div className="cabeca flex-box alig">
            <img className="borda-" src="./images/stores.jpg" alt="" />
            <img onClick={()=>trocaFoto()} className="image-" src={foto} />
            <div className="perfil flex-box colum">
                <p><strong>catanacomics</strong><br /></p>
                <span className="flex-box">
                    <p>{nome}</p>
                    <ion-icon onClick={()=> trocaNome()} name="pencil-outline"></ion-icon>
                </span>
            </div>
        </div>
    )

    function trocaFoto(){
        setFoto(prompt("insira o link de sua nova foto"))
    }

    function trocaNome(){
        setNome(prompt('escreva um novo nome: '))
    }
}

