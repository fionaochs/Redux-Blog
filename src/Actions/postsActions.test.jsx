import { addPost, ADD_POST, updatePost, UPDATE_POST, deletePost, DELETE_POST } from './postsActions';

describe('posts actions', () => {
  it('creates an ADD_POST action', () => {
    const action = addPost({
      title: 'post title',
      body: 'post body'
    });

    expect(action).toEqual({
      type: ADD_POST,
      payload: {
        title: 'post title',
        body: 'post body'
      }
    });
  });

  it('creates an UPDATE_POST action', () => {
    const action = updatePost(1, {
      title: 'post title',
      body: 'updated post body'
    });

    expect(action).toEqual({
      type: UPDATE_POST,
      payload: {
        index: 1,
        post: {
          title: 'post title',
          body: 'updated post body'
        }
      }
    });
  });

  it('creates a DELETE_POST action', () => {
    const action = deletePost(12);

    expect(action).toEqual({
      type: DELETE_POST,
      payload: 12
    });
  });
});
