const TEST = 'TEST';

const INITIAL_STATE = {
  testTwo: false
}

function testReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        testTwo: !state.testTwo
      };
    default:
      return state
  }
}

export default testReducer