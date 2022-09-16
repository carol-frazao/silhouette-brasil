import Input from "./Input";
import InputCheckbox from "./InputCheckbox";
import BtnSubmit from "./BtnSubmit";

const Formulario = () => {
    return (
        <div className="Formulario">
            <div>
                <div className="title-form">
                    <strong> Baixe os moldes gratuitamente aqui! </strong>
                    <p> Os arquivos estão em formato Studio para utilização. </p>
                </div>

                <form>
                    <Input type="text" id="nome" name="nome" content="Nome*" />
                    <Input type="text" id="email" name="email" content="E-mail*" />
                    <Input type="month" id="birthday" name="birthday" content="Qual o mês do seu aniversário?*" />

                    <div className="equipamentos">
                        <span> Quais equipamentos você possui?* </span>
                        <ul>
                            <InputCheckbox id="option1" name="option1" content="Silhouette Cameo 3" />
                            <InputCheckbox id="option2" name="option2" content="Silhouette Cameo 2" />
                            <InputCheckbox id="option3" name="option3" content="Silhouette Portrait" />
                            <InputCheckbox id="option4" name="option4" content="Silhouette Curio" />
                            <InputCheckbox id="option5" name="option5" content="Silhouette Mint" />
                            <InputCheckbox id="option6" name="option6" content="Mimo Stamping" />
                            <InputCheckbox id="option7" name="option7" content="Mimo Embossing" />
                            <InputCheckbox id="option8" name="option8" content="Nenhum" />
                        </ul>
                    </div>

                    <Input type="text" id="validation" name="validation" content="2 + 6 = ?" />

                    <BtnSubmit type="button" id="btn-submit" value="Baixar material" />

                    <div className="obs-submit">
                        <span> Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM. </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario