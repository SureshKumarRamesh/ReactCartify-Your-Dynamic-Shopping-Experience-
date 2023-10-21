import { createContext, useReducer, useContext } from "react";

// Create a context
const AppCtx = createContext(null);

// custom component to provide state via use reducer

export const AppState = (props) => {
  //initial state
  const initialState = {
    discountInformation: {},
    discountList: [],
    productList: [],
    shoppingCart: [],
  };

  // define our reducer
  const reducer = (currentState, action) => {
    // retreive type and payload
    const { type, payload } = action;
    // make a copy of the state
    const newState = { ...currentState };

    switch (type) {
      case "SET_PRODUCT_LIST_AND_DISCOUNT":
        return { ...newState, ...payload };
      case "SET_SHOPPINGLIST_DETAILS":
        let shoppingCart = [...newState.shoppingCart, payload];
        return { ...newState, shoppingCart: [...shoppingCart] };
      case "REMOVE_SHOPPINGLIST_DETAILS":
        let shoppingList = [...payload];
        return { ...newState, shoppingCart: [...shoppingList] };
      default:
        return currentState;
    }
  };

  // we create the state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);
  //1.configuration useReducer -> reducer,initialState (Only Execute Once)
  //2.If State change needed, We will call the dispatch function.
  //3.dispatch function will invode reducer method
  //4.reducer Process the currentstate and return the new state
  //5.Updated information will get stored in the state variable

  // create update function to make it easier to use dispatch
  const update = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <AppCtx.Provider value={{ state, update }}>
      {props.children}
    </AppCtx.Provider>
  );
};

// custom hook, to get the context
export const useAppState = () => {
  return useContext(AppCtx);
};
