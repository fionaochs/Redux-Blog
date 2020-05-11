import { addPost, updatePost, deletePost } from '../Actions/postsActions';
import reducer from './postsReducer';

describe('dogs reducer', () => {
  it('handle the ADD_POST action', () => {
    const state = [];
    const action = addPost({
      title: 'post title',
      body: 'post body'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        title: 'post title',
        body: 'post body'
      }
    ]);
  });

  it('handle the UPDATE_POST action', () => {
    const state = [
      {
        title: 'post title',
        body: 'post body'
      }
    ];

    const action = updatePost(0, {
      title: 'update post title',
      body: 'update post body'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        title: 'update post title',
        body: 'update post body'
      }
    ]);
  });

  it('handles the DELETE_POST action', () => {
    const state = [
      {
        title: 'post title',
        body: 'post body'
      }
    ];

    const action = deletePost(0);

    const newState = reducer(state, action);

    expect(newState).toEqual([]);
  });
});
