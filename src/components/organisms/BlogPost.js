import React, { useEffect, useState } from 'react';
import { Grid, Typography, Container, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getPostById, editPost } from '../../utils/storage';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import EditPostModal from '../organisms/EditPostModal';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPost = () => {
      const post = getPostById('blogPosts', id);
      setPost(post);
    };

    fetchPost();
  }, [id]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleSavePost = (updatedPost) => {
    editPost('blogPosts', updatedPost);
    setPost(updatedPost);
  };

  return (
    <Container>
      <Header />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <EditPostModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSavePost={handleSavePost}
            post={post}
          />
          <Typography variant="h4" component="h2" gutterBottom>
            {post?.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: post?.text }} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Edit Post
          </Button>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};

export default BlogPost;
