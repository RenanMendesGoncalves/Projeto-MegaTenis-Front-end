'use strict';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

class button_login extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    render() {
      if (this.state.liked) {
        return 'Usuário e Senha corretos';
      }
  
      return e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Clique aqui e saiba como é fácil!'
      );
    }
  }
  
  const domContainer = document.querySelector('#button_login');
  ReactDOM.render(e(button_login), domContainer);

const button_login = () => {
  const [state, setState] = useState([])
  console.log(state);
  useEffect(() =>{
    console.log('use efect')
    axios.get('http://localhost:3000/users/all').then(result => setState(result.data))

  }, []) 
  return (
    <div className="ButtonLogin">
      {state.map(data => <span>{data.name}</span>)}
    </div>
  );
}

export default button_login; 
