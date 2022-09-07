const initialState = { count: 0 };

function reducer(state, action) {
  const setCounter = actions[action.type];
  console.log(setCounter);
  const actions = {
    increment: { count: state.count + 1 },
    decrement: { count: state.count - 1 },
  };
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
