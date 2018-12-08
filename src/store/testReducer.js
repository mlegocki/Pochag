const TEST = 'TEST';

const INITIAL_STATE = {
  test: false
}

function testReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TEST_SAGA':
      return {
        test: true
      };
    default:
      return state
  }
}

export default testReducer;