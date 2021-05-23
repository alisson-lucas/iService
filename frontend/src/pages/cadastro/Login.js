import logoImg from '../../assets/iservice_icon_blue.png';
import './styles.css';

export default function Login() {
    return (

        <>
            <div className="logo">
                <a href="../Home.html"><img src={logoImg} alt="" width="200" /></a>
            </div>
            <div class="mainContainer">
                <div id="container">
                    <div>
                        <div classname="card texto">
                        </div>
                        <h2>Faça login para continuar</h2>
                        <div classname="card">
                            <div classname="info1">
                                <div classname="info2">
                                    <div classname="login">
                                        <input placeholder="Login" type="text" />
                                    </div>
                                    <div classname="senha">
                                        <input placeholder="Senha" type="password" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="entrarButton">Entrar</button>
                    <a href="Remeber">Esqueci a minha senha</a>
                    <a href="../cadastro1/cadastro1">Não tem conta? Cadastre-se</a>
                </div>
            </div>
        </>


    )

}