
import React, { Component } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import UsuarioServicos from '../Servicos/UsuarioServicos';

class CreateUpdateUsuario extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id_bike2: this.props.match.params.id,
            marca: "",
            tamanho: "",
            mtb_road: "",
            tipo: ""
        }

        this.changeMarcaHandler = this.changeMarcaHandler.bind(this);
        this.changeTamanhoHandler = this.changeTamanhoHandler.bind(this);
        this.changeMtb_roadHandler = this.changeMtb_roadHandler.bind(this);
        this.changeTipoHandler = this.changeTipoHandler.bind(this);
        this.salvarUsuario = this.salvarUsuario.bind(this);
    }

    componentDidMount() {
        if (this.state.id === "add") {
            return false
        } else {
            return UsuarioServicos.getUsuarioById(this.state.id_bike2).then((res) => {
                let Usuario = res.data;
                this.setState({
                    marca: Usuario.marca,
                    tamanho: Usuario.tamanho,
                    mtb_road: Usuario.mtb_road,
                    tipo: Usuario.tipo

                });
            });
        }
    }

    salvarUsuario() {
        let usuario = {
            marca: this.state.marca,
            tamanho: this.state.tamanho,
            mtb_road: this.state.mtb_road,
            tipo: this.state.tipo
        }
        if (this.state.id_bike2 === "add") {

            UsuarioServicos.createUsuario(usuario).then(
                (res) => {
                    alert(res.data);
                   
                }
            )
        }else{
            usuario.id_bike2 = this.state.id_bike2
            UsuarioServicos.editUsuario(usuario).then(
                (res) => console.log(res.data) 
            );
        }
        this.props.history.push("/usuarios");
    }


    changeMarcaHandler(event) {
        this.setState({ marca: event.target.value })
    }
    changeTamanhoHandler(event) {
        this.setState({ tamanho: event.target.value })
    }
    changeMtb_roadHandler(event) {
        this.setState({ mtb_road: event.target.value })
    }
    changeTipoHandler(event) {
        this.setState({ tipo: event.target.value })
    }

    cancelar() {
        this.props.history.push("/usuarios")
    }







    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <h1>Cadastro de Usuários</h1>
                </Row>
                <Form>
                    <Form.Group controlId="formMarca">
                        <Form.Control type="text" placeholder="Marca" value={this.state.marca} onChange={this.changeMarcaHandler} />
                        <Form.Text className="text-muted">
                            Digite sua marca.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formTamanho">
                        <Form.Control type="text" placeholder="Tamanho" value={this.state.tamanho} onChange={this.changeTamanhoHandler} />
                        <Form.Text className="text-muted">
                            Digite sua Tamanho.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formMtb_road">
                        <Form.Control type="raca" placeholder="Mtb_road" value={this.state.mtb_road} onChange={this.changeMtb_roadHandler} />
                        <Form.Text className="text-muted">
                            Digite mtb_road.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formTipo">
                        <Form.Control type="Tipo" placeholder="Tipo" value={this.state.tipo} onChange={this.changeTipoHandler} />
                        <Form.Text className="text-muted">
                            Digite tipo.
                        </Form.Text>
                    </Form.Group>
                    <Row className="float-right">
                        <Button variant="success" style={{ margin: "10px 0px 10px 0px" }} className="btnSubmit" onClick={this.salvarUsuario}>
                            Inserir
                        </Button>
                        <Button variant="warning" style={{ margin: "10px" }} onClick={this.cancelar.bind(this)} >
                            Cancelar
                        </Button>
                    </Row>

                </Form>
            </Container>


        );
    }
}

export default CreateUpdateUsuario;