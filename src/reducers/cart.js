export const initialState = JSON.parse(localStorage.getItem('cart')) || []

const updateWithLocalStorage = (newState) => {
  localStorage.setItem('cart', JSON.stringify(newState))
}

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateWithLocalStorage(newState)
        return newState
      }
      const newState = [...state, { ...actionPayload, quantity: 1 }]
      updateWithLocalStorage(newState)
      return newState
    }

    case 'DECREMENT': {
      const productInCartI = state.findIndex(item => item.id === actionPayload.id)
      const product = state[productInCartI]
      if (product.quantity === 1) return state

      const newState = structuredClone(state)
      newState[productInCartI].quantity -= 1
      updateWithLocalStorage(newState)
      return newState
    }

    case 'REMOVE_FROM_CART': {
      const newState = state.filter(item => item.id !== actionPayload.id)
      updateWithLocalStorage(newState)
      return newState
    }

    case 'CLEAR_CART': {
      const newState = initialState
      updateWithLocalStorage(newState)
      return newState
    }
  }
  return state
}
