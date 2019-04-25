import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  const obj = Object.assign({}, state);
  if (action.type === 'CHANGE_VIDEO') {
    obj.video = action.video;
    console.log(obj)
    return obj.video;
  }
  return null;
};

export default currentVideoReducer;
