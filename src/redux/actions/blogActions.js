export const ADD_BLOG = 'ADD_BLOG';
export const EDIT_BLOG = 'EDIT_BLOG';
export const DELETE_BLOG = 'DELETE_BLOG';
export const UPDATE_BLOG = 'UPDATE_BLOG';

export const addBlog = (blog) => ({
  type: ADD_BLOG,
  payload: blog,
});


export const deleteBlog = (id) => ({
  type: DELETE_BLOG,
  payload: id,
});

export const updateBlog = (id, updates) => ({
  type: UPDATE_BLOG,
  payload: { id, updates },
});
