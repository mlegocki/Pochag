const TEST = 'TEST';

const INITIAL_STATE = {
  test: false
}

function testReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        test: !state.test
      };
    default:
      return state
  }
}

export default testReducer