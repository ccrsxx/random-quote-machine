const CHANGE_COLOR = 'CHANGE_COLOR';

interface currentColorType {
  type: string;
  color: string;
}

export const colorReducer = (state = null, action: currentColorType) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return action.color;
    default:
      return state;
  }
};

export const changeColor = (color: currentColorType['color']) => ({
  type: CHANGE_COLOR,
  color
});
