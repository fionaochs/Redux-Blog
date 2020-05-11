export const ADD_POST = 'ADD_POST';
export const addPost = post => ({
  type: ADD_POST,
  payload: post
});

export const UPDATE_POST = 'UPDATE_POST';
export const updatePost = (index, post) => ({
  type: UPDATE_POST,
  payload: {
    index,
    post
  }
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = index => ({
  type: DELETE_POST,
  payload: index
});
