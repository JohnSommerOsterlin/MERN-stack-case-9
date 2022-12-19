import React, { useState } from 'react';

// Hooks
import { useAuthContext } from '../hooks/useAuthContext';
import { usePostsContext } from "../hooks/usePostsContext"

const EditPostForm = ({ post }) => {
  const [description, setDescription] = useState(post.description);
  const { dispatch } = usePostsContext()
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/api/posts/${post._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify({ description }),
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: 'UPDATE_POST', payload: json });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className='border-2 rounded-lg' type="submit">Update</button>
    </form>
  );
};

export default EditPostForm;