import { useReducer } from "react";

const initialState = {
  refresh: 0,
};

const refreshReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { refresh: state.refresh + 1 };
    default:
      return state;
  }
};

const useRefresh = () => {
  const [state, dispatch] = useReducer(refreshReducer, initialState);

  const incrementRefresh = () => {
    dispatch({ type: "INCREMENT" });
  };

  return {
    refresh: state.refresh,
    incrementRefresh,
  };
};

export default useRefresh;
