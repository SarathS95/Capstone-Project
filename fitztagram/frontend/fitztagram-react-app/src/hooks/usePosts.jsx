import { useState, useEffect } from 'react';

function usePosts() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  
  const addPost = (userName, postText) => {
    const newPost = {
      username: userName,
      text: postText,
    };


    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(newPost),
    })
      .then(response => response.json())
      .then((data) => {
        setPosts([data, ...posts]); 
      })
      .catch(error => console.error('Error posting new post:', error));
  };

  return { posts, addPost };
}

export default usePosts;