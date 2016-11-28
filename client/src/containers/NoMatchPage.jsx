import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';

class NoMatch extends Component {
  render() {

    return (
      <div>
        <Card className="container">
          <h1 className="card-heading">404</h1>
          <h2>Страница не найдена</h2>
          <CardText><Link to={'/'}>Вернуться на главную</Link>.</CardText>
        </Card>
      </div>
    );
  }
}

export default NoMatch;
