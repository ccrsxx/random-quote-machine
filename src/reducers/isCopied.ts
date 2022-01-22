const TOGGLE_COPY = 'TOGGLE_COPY';

interface copy {
  type: string;
}

const copyReducer = (state = false, action: copy) => {
  switch (action.type) {
    case TOGGLE_COPY:
      return !state;
    default:
      return state;
  }
};

export const toggleCopy = () => ({
  type: TOGGLE_COPY
});

export default copyReducer;
