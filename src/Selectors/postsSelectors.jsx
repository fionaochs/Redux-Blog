export const getPosts = state => state;

export const getPostByIndex = (state, index) => {
  const foundIndex = getPosts(state).findIndex(post => post === state[index]);
  return state[foundIndex];
};
