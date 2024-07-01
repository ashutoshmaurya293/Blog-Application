import React from "react";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <Card>
      <CardActionArea component={Link} to={`/post/${post.id}`}>
        <CardContent>
          {/* Blog Title  */}
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.excerpt}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {post.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Post;
