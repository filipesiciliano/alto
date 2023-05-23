import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
} from '@mui/material';
import CreatePostModal from '../components/organisms/CreatePostModal';
import { loadPosts, addNewPost } from '../utils/storage';
import Header from '../components/templates/Header';
import Footer from '../components/templates/Footer';
import { useNavigate } from 'react-router-dom';

const PostList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = () => {
      const posts = loadPosts('blogPosts');
      setAllPosts(posts);
    };

    fetchPosts();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddPost = (newPost) => {
    const newId = addNewPost('blogPosts', newPost);
    newPost.id = newId;
    setAllPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const handleOpenPost = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <>
      <Container>
        <Header />

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              All Posts
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpenModal}>
              Add New Post
            </Button>
            <List>
              {allPosts?.map((post, index) => (
                <ListItem key={post.id} button>
                  <ListItemText
                    primary={post.title}
                    secondary={
                      <Typography component="div" variant="body2" dangerouslySetInnerHTML={{ __html: post.text }} />
                    }
                    onClick={() => handleOpenPost(post.id)}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <CreatePostModal
          open={isModalOpen}
          onClose={handleCloseModal}
          onAddPost={handleAddPost}
        />

        <Footer />
      </Container>
    </>
  );
};

export default PostList;
