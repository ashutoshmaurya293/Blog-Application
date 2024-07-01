import { ADD_BLOG, DELETE_BLOG, UPDATE_BLOG } from "../actions/blogActions";

const initialState = {
  blogs: JSON.parse(localStorage.getItem("blogs")) || [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    // add blogs
    case ADD_BLOG:
      const newBlogsAfterAdd = [...state.blogs, action.payload];
      localStorage.setItem("blogs", JSON.stringify(newBlogsAfterAdd));
      return { ...state, blogs: newBlogsAfterAdd };
    // Delete blogs
    case DELETE_BLOG:
      const newBlogsAfterDelete = state.blogs.filter(
        (blog) => blog.id !== action.payload
      );
      localStorage.setItem("blogs", JSON.stringify(newBlogsAfterDelete));
      return { ...state, blogs: newBlogsAfterDelete };
    // Update blogs
    case UPDATE_BLOG:
      const newBlogsAfterUpdate = state.blogs.map((blog) =>
        blog.id == action.payload.id
          ? { ...blog, ...action.payload.updates }
          : blog
      );
      console.log(newBlogsAfterUpdate);
      localStorage.setItem("blogs", JSON.stringify(newBlogsAfterUpdate));
      return { ...state, blogs: newBlogsAfterUpdate };

    default:
      return state;
  }
};

export default blogReducer;
