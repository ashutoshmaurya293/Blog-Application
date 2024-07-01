import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addBlog, updateBlog } from "../redux/actions/blogActions";

function BlogForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // taking blog from redux 
  const blog = useSelector((state) =>
    state.blog.blogs.find((b) => b.id === parseInt(id))
  );

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setExcerpt(blog.excerpt);
      setCategory(blog.category);
      setAuthor(blog.author);
    }
  }, [blog]);

  // for adding blogs 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: id ? parseInt(id) : Date.now(),
      title,
      content,
      excerpt,
      category,
      author,
      date: new Date().toISOString().split("T")[0],
    };
    if (id) {
     return
    } else {
      dispatch(addBlog(newBlog));
    }
    navigate("/");
  };
// for update Blogs  
  const handleUpdate = () => {
    if (id) {
      const updates = {
        title,
        content,
        excerpt,
        category,
        author,
      };
      console.log(updates);
      dispatch(updateBlog(id, updates));
      navigate("/");
    }
  };

  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h4" gutterBottom>
        {id ? "Edit Blog" : "Create Blog"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
          required
        />
        <TextField
          label="Excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
          required
        />
        <TextField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
          required
        />
        <TextField
          label="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
          required
        />
        <ReactQuill
          value={content}
          onChange={setContent}
          style={{ height: "300px", marginBottom: "20px" }}
        />
        {/* button for update and add  */}
        {id ? (
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleUpdate}
          >
            Update
          </Button>
        ) : (
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        )}
      </form>
    </Box>
  );
}

export default BlogForm;
