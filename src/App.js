import React, { Component, Fragment } from 'react';
import Headers from './Headers';
import Article from './Article';
import Footer from './Footer';
import api from './api';
import { Table, Button, Form, Input, Label} from 'reactstrap';


class App extends Component {

  state = {
    motoristas: [],
  }

  async componentDidMount() {
    const response = await api.get('/analise-cadastro');

    //console.log(response.data);

    this.setState({ motoristas: response.data.content });
    console.log(response.data.content);
  }
  render() {
    const { motoristas } = this.state;

    return (
      <div>

        <Headers />
        <Article />
        <div style={{margin: 'auto', width: '45%'}}>
        <h4>Análise</h4>
        <Form style={{marginBottom: '30px'}}>
          <Label for="Nome">Condutor</Label>
          <Input type="nome" name="nome" id="nome" placeholder="Felipe" />
        </Form>
        <textarea placeholder="Observações" id="story" name="story"
          rows="5" cols="100">
        </textarea>
        </div>
        <div style={{marginBotton: '30px', margin: 'auto', width: '30%'}}>
        
          <Button style={{margin: 'auto', position: 'relative', top: '0px', left: '70%'}} color="danger">Indeferir!</Button>
          <Button style={{margin: 'auto', position: 'relative', top: '0px', right: '5%'}}color="primary">Deferir!</Button>
          
        </div>
        <Table style={{marginTop: '30px'}}>
          
          {motoristas.map(motorista =>
            <Fragment>
              <thead>
            <tr>
              <th>Nome</th>
              <th>Sexo</th>
              <th>Telefone</th>
              <th>Curso</th>
              <th>Endereço</th>
              <th>Escolaridade</th>
              <th>Veiculo</th>
              <th>Ano</th>
              <th>Cor</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Placa</th>
              <th>Tipo</th>
              <th>Analisar</th>
            </tr>
          </thead>
                <td key={motorista.id}>{motorista.nome}</td>
                <td key={motorista.id}>{motorista.sexo}</td>
                <td key={motorista.id}>{motorista.telefone}</td> 
                <td key={motorista.id}>{motorista.curso}</td>
                <td key={motorista.id}>{motorista.endereco}</td>
                <td key={motorista.id}>{motorista.tipoAluno}</td>
                <td>---></td>
                <td key={motorista.veiculo.id}>{motorista.veiculo.ano}</td>
                <td key={motorista.veiculo.id}>{motorista.veiculo.cor}</td>
                <td key={motorista.veiculo.id}>{motorista.veiculo.marca}</td>
                <td key={motorista.veiculo.id}>{motorista.veiculo.modelo}</td>
                <td key={motorista.veiculo.id}>{motorista.veiculo.placa}</td>
                <td key={motorista.veiculo.id}>{motorista.veiculo.tipo}</td>
                <td><Button color="primary">Analisar!</Button></td>
                
            </Fragment>           
          )}
        </Table>

     
      </div>
    );
  }
}

export default App;
