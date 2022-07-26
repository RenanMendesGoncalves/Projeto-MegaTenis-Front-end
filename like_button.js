'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Você só precisa preencher corretamente os campos abaixo:';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Clique aqui e saiba como é fácil!'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);