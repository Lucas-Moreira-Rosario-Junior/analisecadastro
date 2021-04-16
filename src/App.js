import React, { Component } from 'react';
import Headers from './Headers';
import Article from './Article';
import Footer from './Footer';
import api from './api';


class App extends Component{

  state = {
    motoristas: [],
  }
  
  async componentDidMount(){
    const response = await api.get('/analise-cadastro');
  
    console.log(response.data);
  
    this.setState({ motoristas: response.data});
  }
  render(){
    

    return(
      <div>
        <Headers />
        <Article />
        <Footer />
      </div>
    );
  }
}

export default App;
