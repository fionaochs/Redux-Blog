import { getPosts, getPostByIndex } from './postsSelectors';

describe('posts selectors', () => {
  it('gets a list of posts', () => {
    const state = [
      {
        title: 'post title',
        body: 'post body'
      }
    ];

    const posts = getPosts(state);

    expect(posts).toEqual([
      {
        title: 'post title',
        body: 'post body'
      }
    ]);
  });

  it('gets a post by index', () => {
    const state = [
      {
        title: 'post title1',
        body: 'post body1'
      },
      {
        title: 'post title2',
        body: 'post body2'
      },
      {
        title: 'post title3',
        body: 'post body3'
      },
      {
        title: 'post title4',
        body: 'post body4'
      }
    ];

    const post = getPostByIndex(state, 1);

    expect(post).toEqual({
      title: 'post title2',
      body: 'post body2'
    });
  });
});
