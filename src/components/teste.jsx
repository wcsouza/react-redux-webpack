import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../store/actions/testeActions';

class Teste extends Component {
    handleEvent = event => {
        console.log(this);
        this.props.AlterarValor('novo valor');
    };

    render() {
        return (
            <div>
                <h1>Valor: {this.props.valor}</h1>
                <button onClick={this.handleEvent}>Alterar Valor</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    valor: state.teste.valor
});

export default connect(mapStateToProps, action)(Teste);