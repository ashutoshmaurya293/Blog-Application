import React from 'react';
import { Paper, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

function Sidebar({ categories, filterPosts }) {
  return (
    <Paper sx={{ padding: 2, marginTop: 2 }}>
      <List>
        {/* Get all categorys */}
        {categories.map((category, index) => (
          <ListItem button key={index} onClick={() => filterPosts(category)}>
            <ListItemText>
              <Link to={category == 'All' ? '/' : `/category/${category.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {category}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default Sidebar;
