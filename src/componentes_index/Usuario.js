import React, { useState } from "react"
export default function Usuario() {
    const [nome, setNome] = useState("Catana")
    const [foto, setFoto] = useState("./images/9gag 1.jpg")
    return (
        <div data-test="user" className="cabeca flex-box alig">
            <img className="borda-" src="./images/stores.jpg" alt="" />
            <img  data-test="profile-image" onClick={()=>trocaFoto()} className="image-" src={foto} />
            <div className="perfil flex-box colum">
                <p><strong>catanacomics</strong><br /></p>
                <span className="flex-box">
                    <p data-test="name">{nome}</p>
                    <ion-icon data-test="edit-name" onClick={()=> trocaNome()} name="pencil-outline"></ion-icon>
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

