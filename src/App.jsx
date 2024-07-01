import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import BlogForm from "./components/BlogForm";
import { getTheme } from "./theme";
import { categories } from "./data";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const blogs = useSelector((state) => state.blog.blogs);
  const [filteredPosts, setFilteredPosts] = useState(blogs);

  useEffect(() => {
    setFilteredPosts(blogs);
  }, [blogs]);

  // Theam mode
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // filterPosts

  const filterPosts = (category) => {
    if (category == "All") {
      setFilteredPosts(blogs);
    } else {
      setFilteredPosts(blogs.filter((post) => post.category == category));
    }
  };

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      {/* Header Section  */}
      <Header toggleTheme={toggleTheme} themeMode={themeMode} />
      <Container>
        <Box sx={{ display: "flex", marginTop: 2 }}>
          {/* Sidebar secetion  */}
          <Sidebar categories={categories} filterPosts={filterPosts} />
          <Box sx={{ flexGrow: 1, paddingLeft: 2 }}>
            {/* All Route  */}
            <Routes>
            {/* BlogList section  */}
              <Route path="/" element={<BlogList posts={filteredPosts} />} />
              {/* fillter BlogList section  */}
              <Route
                path="/category/:category"
                element={<BlogList posts={filteredPosts} />}
              />
              {/* BlogDetails section  */}
              <Route path="/post/:id" element={<BlogDetails />} />
              {/* create a new blog or update  */}
              <Route path="/create" element={<BlogForm />} />
              <Route path="/edit/:id" element={<BlogForm />} />
            </Routes>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
