import reactDom from "react-dom";

function App(){
    return (
        <div>
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
    <main class="flex-box row just-be">
      <div class="main">
        <section class="historias flex-box alig">
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
          <div class="historia">
            <img class="borda" src="./images/stores.jpg" alt="" />
            <img class="image" src="./images/9gag 1.jpg" />
            <p>9gag</p>
          </div>
          <div class="historia">
            <img class="borda" src="./images/stores.jpg" alt="" />
            <img class="image" src="./images/meowed 1.jpg" />
            <p>meowed</p>
          </div>
          <div class="historia">
            <img class="borda" src="./images/stores.jpg" alt="" />
            <img class="image" src="./images/barked 1.jpg" />
            <p>barked</p>
          </div>
          <div class="historia">
            <img class="borda" src="./images/stores.jpg" alt="" />
            <img class="image" src="./images/nathanwpylestrangeplanet 1.jpg" />
            <p>nathanwpyle...</p>
          </div>
          <div class="historia">
            <img class="borda" src="./images/stores.jpg" alt="" />
            <img class="image" src="./images/wawawiwacomicsa 1.jpg" />
            <p>wawawiwac...</p>
          </div>
          <div class="historia">
            <img class="borda" src="./images/stores.jpg" alt="" />
            <img class="image" src="./images/respondeai 1.jpg" />
            <p>respondeai</p>
          </div>
          <div class="historia">
            <img class="borda" src="./images/stores.jpg" alt="" />
            <img class="image" src="./images/filomoderna 1.jpg" />
            <p>filomoderna</p>
          </div>
          <div class="historia">
            <img class="borda" src="./images/stores.jpg" alt="" />
            <img class="image" src="./images/memeriagourmet 1.jpg" />
            <p>memeriago.</p>
          </div>
        </section>
        <section class="publicacoes">
          <div class="publicacao">
            <header class="flex-box just-be alig">
              <div class="publicador flex-box alig">
                <img src="./images/9gag 1.jpg" />
                <p><strong>9gag</strong></p>
              </div>
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </header>
            <img
              class="img-puclicacao"
              src="./images/gato-telefone 1.jpg"
              alt=""
            />
            <footer>
              <div class="reacoes flex-box just-be alig">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
              <div class="quem-curtiu flex-box alig">
                <img src="./images/respondeai 1.jpg" alt="" />
                <p>
                  Curtido por <strong>respondeai</strong> e
                  <strong>outras 101.523 pessoas</strong>
                </p>
              </div>
            </footer>
          </div>
          <div class="publicacao">
            <header class="flex-box just-be alig">
              <div class="publicador flex-box alig">
                <img src="./images/9gag 1.jpg" />
                <p><strong>9gag</strong></p>
              </div>
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </header>
            <img class="img-puclicacao" src="./images/dog 1.jpg" alt="" />
            <footer>
              <div class="reacoes flex-box just-be alig">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
              <div class="quem-curtiu flex-box alig">
                <img src="./images/respondeai 1.jpg" alt="" />
                <p>
                  Curtido por <strong>respondeai</strong> e
                  <strong>outras 101.523 pessoas</strong>
                </p>
              </div>
            </footer>
          </div>
          <div class="publicacao">
            <header class="flex-box just-be alig">
              <div class="publicador flex-box alig">
                <img src="./images/9gag 1.jpg" />
                <p><strong>9gag</strong></p>
              </div>
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </header>
            <video
              class="video-publicacao"
              src="./images/video.mp4"
              src="./images/video.ogv"
              autoplay
              muted
              controls
            ></video>
            <footer>
              <div class="reacoes flex-box just-be alig">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
              <div class="quem-curtiu flex-box alig">
                <img src="./images/respondeai 1.jpg" alt="" />
                <p>
                  Curtido por <strong>respondeai</strong> e
                  <strong>outras 101.523 pessoas</strong>
                </p>
              </div>
            </footer>
          </div>
        </section>
      </div>
      <div class="agregado">
        <div class="cabeca flex-box alig">
          <img class="borda-" src="./images/stores.jpg" alt="" />
          <img class="image-" src="./images/9gag 1.jpg" />
          <div class="perfil flex-box colum">
            <p><strong>catanacomics</strong><br /></p>
            <p>Catana</p>
          </div>
        </div>
        <div class="sugestao flex-box just-be">
          <p>Sugestões para você</p>
          <p><strong>Ver tudo</strong></p>
        </div>
        <div class="sugestoes flex-box alig">
          <img src="./images/9gag 1.jpg" />
          <div class="perfil flex-box just-be alig">
            <div class="perf">
              <p><strong>catanacomics</strong><br /></p>
              <p>Catana</p>
            </div>
            <span>Seguir</span>
          </div>
        </div>
        <div class="sugestoes flex-box alig">
          <img src="./images/9gag 1.jpg" />
          <div class="perfil flex-box just-be alig">
            <div class="perf">
              <p><strong>catanacomics</strong><br /></p>
              <p>Catana</p>
            </div>
            <span>Seguir</span>
          </div>
        </div>
        <div class="sugestoes flex-box alig">
          <img src="./images/9gag 1.jpg" />
          <div class="perfil flex-box just-be alig">
            <div class="perf">
              <p><strong>catanacomics</strong><br /></p>
              <p>Catana</p>
            </div>
            <span>Seguir</span>
          </div>
        </div>
        <div class="sugestoes flex-box alig">
          <img src="./images/9gag 1.jpg" />
          <div class="perfil flex-box just-be alig">
            <div class="perf">
              <p><strong>catanacomics</strong><br /></p>
              <p>Catana</p>
            </div>
            <span>Seguir</span>
          </div>
        </div>
        <div class="letras-pequenas">
          <p>
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
          </p>
          <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
      </div>
    </main>
    <footer class="bar-phone flex-box just-be alig">
      <ion-icon name="home"></ion-icon>
      <ion-icon name="search-outline"></ion-icon>
      <ion-icon name="add-circle-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </footer>
        </div>
    )
}

reactDom.render(App(), document.querySelector('.root'))