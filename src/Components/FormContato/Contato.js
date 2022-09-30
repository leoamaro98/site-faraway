import { Form, FormGroup, Input, Label } from "reactstrap";
import "./Contato.css"

const Contato = () => {
    return (

        <div className='container-contato'>
            <div className="form-contato">

                <form action="https://formsubmit.co/contato@faraway.com" 
                    method="POST"
                    enctype="text/plain">
                    <FormGroup>
                        <Label for="input-email" >
                            Email
                        </Label>
                        <Input
                            required
                            id="input-email"
                            placeholder="Insira seu email"
                            type="email"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="input-name">
                            Nome
                        </Label>
                        <Input
                            id="input-name"
                            required
                            placeholder="Insira seu Nome"
                            type="text"
                        />
                    </FormGroup>


                    <FormGroup>
                        <Label for="input-title">
                            Assunto
                        </Label>
                        <Input
                            required
                            id="input-title"
                            placeholder="Assunto"
                            type="text"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="input-content">
                            Mensagem
                        </Label>
                        <Input
                            required
                            id="input-content"
                            placeholder="Mensagem"
                            type="text"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Input
                            id="input-submit"
                            placeholder="Mensagem"
                            type="submit"
                        />
                    </FormGroup>
                </form >
            </div>
            <img src="./imagens/contato.png" />
        </div>

    );
}

export default Contato;

