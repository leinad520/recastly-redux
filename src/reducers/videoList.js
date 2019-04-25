import Redux from 'redux';

var videoListReducer = (state=[], action) => {
  //TODO: define a reducer for the videoList field of our state.
  const obj = Object.assign({}, state);
  if (action.type === 'CHANGE_VIDEO_LIST') {
    obj.videos = action.videos;
    return obj.videos;
  }
  return state;
};

export default videoListReducer;
