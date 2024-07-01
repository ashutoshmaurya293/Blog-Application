import React from 'react';
import { Grid, Typography } from '@mui/material';
import Post from './Post.jsx';

function BlogList({ posts }) {
  return (
    <Grid container spacing={4} sx={{ marginTop: 2 }}>
      {/* get all posts or filter posts */}
      {posts.length === 0 ? (
        <Typography variant="h6">No posts available</Typography>
      ) : (
        posts.map((post) => (
          <Grid item xs={12} md={6} key={post.id}>
            <Post post={post} />
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default BlogList;
