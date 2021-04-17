import React, { Component, Fragment } from 'react';
import Headers from './Headers';
import Article from './Article';
import Footer from './Footer';
import api from './api';
import { Table } from 'reactstrap';


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
        <Table>
          
          {motoristas.map(motorista =>
            <Fragment>
                <td key={motorista.id}>{motorista.nome}</td>
                <td key={motorista.id}>{motorista.sexo}</td>
                <td key={motorista.id}>{motorista.telefone}</td> 
            </Fragment>           
          )}
        </Table>

        <Footer />
      </div>
    );
  }
}

export default App;
