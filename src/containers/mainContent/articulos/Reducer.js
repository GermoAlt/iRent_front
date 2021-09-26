export const initialState = {
    carrito: []
}

const reducer  = (state, action) => {
    switch(action.type){
        case 'AGREGAR_CARRITO':
            return{
                ...state,
                carrito: [...state.carrito, action.item]
            }
    }
}

export default reducer