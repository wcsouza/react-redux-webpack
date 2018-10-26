const INITIAL_STATE = {
    valor: 'init'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ALTERAR_VALOR':
            return { ...state, valor: action.payload }
        default:
            return state;
    }

}