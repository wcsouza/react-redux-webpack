import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../store/actions/testeActions';

class Teste extends Component {
    state = { inputValue: '' };

    handleEvent = event => {
        this.props.AlterarValor(this.state.inputValue);
    };

    onChangeInput = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    render() {
        return (
            <div>
                <h1>Valor: {this.props.valor}</h1>
                <input type="text" value={this.state.inputValue} onChange={this.onChangeInput} />
                <br />
                <button onClick={this.handleEvent}>Alterar Valor</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    valor: state.teste.valor
});

export default connect(mapStateToProps, action)(Teste);