import React from 'react';
import { Table } from 'reactstrap';

const Footer = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>Nome</th>
          <th>sexo</th>
          <th>endereço</th>
          <th>telefone</th>
          <th>veiculo</th>
          <th>id</th>
          <th>tipo</th>
          <th>ano</th>
          <th>cor</th>
          <th>placa</th>
          <th>modelo</th>
          <th>marca</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Footer;