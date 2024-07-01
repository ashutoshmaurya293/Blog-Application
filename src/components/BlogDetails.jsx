import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Box, Paper, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBlog } from '../redux/actions/blogActions';
import { Link } from 'react-router-dom';

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blog = useSelector((state) =>
    state.blog.blogs.find((b) => b.id === parseInt(id))
  );

  if (!blog) return <Typography variant="h6">Post not found</Typography>;

  // handleDelete blogs 

  const handleDelete = () => {
    dispatch(deleteBlog(blog.id));
    navigate('/');
  };

  return (
    <Box sx={{ marginTop: 2 }}>
      <Paper sx={{ padding: 3 }}>
        {/* blog Tiltle  */}
        <Typography variant="h4" gutterBottom>{blog.title}</Typography>
        {/* author and date */}
        <Typography variant="subtitle1" gutterBottom>
          By {blog.author} on {blog.date}
        </Typography>
        {/* blog contenr */}
        <Typography variant="body1">{blog.content}</Typography>
        {/* buttons for Edit and Delete  */}
        <Button component={Link} to={`/edit/${blog.id}`} variant="contained" sx={{ marginRight: 2 }}>
          Edit
        </Button>
        <Button onClick={handleDelete} variant="contained" color="error">
          Delete
        </Button>
      </Paper>
    </Box>
  );
}

export default BlogDetails;
