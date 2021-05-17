import logoImg from'../../assets/iservice_icon_blue.png';

return(
<>
  < div className="logo">
        <img  href="../cadastro/Cadastro.js" src="{LogoImg}" alt="" width="200"></img>
    </div>

  <div className="container">
    <div className="row justify-content-center">
      <div className="col d-flex justify-content-center">

        <div className="card">
          <h2>Insira o seus dados para concluir o seu cadastro</h2>
          <div className="row">

            <div className="column">
              <label for="Login">Login</label>
              <input type="text" id="Login"/>
            </div>

            <div className="column">
              <label for="senha">Senha</label>
              <input type="password" id="senha"/>
            </div>

            <div className="column">
              <label for="name">Nome</label>
              <input type="text" id="name"/>
            </div>

            <div className="row">
              <div className="column col-6">
                <label for="lat">Latitude</label>
                <input type="text" id="lat"/>
              </div>
              <div className="column col-6"/>
                <label for="long">Longitude</label>
                <input type="text" id="long"/>
              </div>
            </div>
            <div className="column">
              <button>Cadastrar</button>
            </div>
          </div>
        </div>
       </div>
      </div> 
    </div>
   </div>
</>

)
