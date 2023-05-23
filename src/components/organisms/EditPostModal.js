import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  Typography,
  TextField,
  Box,
} from '@mui/material';

export const EditPostModal = ({ open, onClose, onSavePost, post }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setText(post.text);
    }
  }, [post]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSavePost = () => {
    if (title.trim() === '' || text.trim() === '') {
      setError('Please fill in both the title and text fields.');
    } else {
      const updatedPost = {
        ...post,
        title,
        text,
      };
      onSavePost(updatedPost);
      setError('');
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Edit Post
        </Typography>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={handleTitleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Text"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={text}
          onChange={handleTextChange}
          sx={{ mb: 2 }}
        />
        {error && (
          <Typography variant="body2" color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}
        <Button variant="contained" color="primary" onClick={handleSavePost}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditPostModal;
