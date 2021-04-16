import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Article = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">IFMA - Monte Castelo</h1>
        <p className="lead">Aqui será mostrado todos os cadastrados nas vagas de estacionamento, para verificar se são indicados a serem deferidos ou indeferidos para o estacionamento.</p>
        <hr className="my-2" />
        <p>Sistema de Estacionamento - IFMA - Monte Castelo</p>
      </Jumbotron>
    </div>
  );
};
export default Article;