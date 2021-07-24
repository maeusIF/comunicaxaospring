
import React, { Component } from 'react';
import { Row, Button, Container, Table } from 'react-bootstrap';
import UsuarioServicos from '../Servicos/UsuarioServicos';


class ListaUsuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: []
        }

        this.voltar = this.voltar.bind(this);
        this.excluir = this.excluir.bind(this);
        this.editar = this.editar.bind(this);
        this.novoUsuario = this.novoUsuario.bind(this);
    }


    componentDidMount() {
        this.getUsuarios();

    }
    getUsuarios() {
        UsuarioServicos.getUsuario().then(
            (resposta) =>
                this.setState({ usuario: resposta.data })
        );
    }

    voltar() {
        this.props.history.push("/");
    }

    excluir(id) {
        UsuarioServicos.deleteUsuario(id).then(
            res => {
                alert(res.data);
                this.getUsuarios();

            });
    }
    editar(id) {
        this.props.history.push("/usuarios/"+id);
    }
    novoUsuario() {
        this.props.history.push("/usuarios/add")
    }


    render() {
        return (
            <Container>
                <Row>
                    <h1>USUARIOS</h1>
                </Row>
                <Row className="float-right">
                    <Button variant="link" onClick={this.voltar}>Voltar</Button>{' '}

                </Row>
                <Row>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>
                                    NOME
                                </th>
                                <th>
                                    MARCA
                                </th>
                                <th>
                                    TAMANHO
                                </th>
                                <th>
                                    MTB-ROAD
                                </th>
                                <th>
                                    TIPO
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.usuario.map(
                                    usuario =>
                                        <tr key={usuario.id_bike}>
                                            <td>
                                                {usuario.marca}
                                            </td>
                                            <td>
                                                {usuario.tamanho}
                                            </td>
                                            <td>
                                                {usuario.mtb_road}
                                            </td>
                                            <td>
                                                {usuario.tipo}
                                            </td>
                                            <td>
                                                <Button variant="warning" onClick={()=>this.editar(usuario.id_bike)} >Editar</Button>
                                                <Button variant="danger" onClick={()=>this.excluir(usuario.id_bike)} >X</Button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>
                <Row className="float-left" >
                    <Button variant="link" onClick={this.voltar}>Voltar</Button>

                </Row>
                <Row className="float-right">
                    <Button className="float-right" variant="secondary" onClick={this.novoUsuario}>Novo Usuario</Button>

                </Row>
            </Container>
        );
    }
}

export default ListaUsuarios;