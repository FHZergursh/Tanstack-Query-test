import React, { useEffect, useState } from 'react'

interface Post {
  id: number;
  title: string;
}

const QueryExample = () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/posts`);
      const posts = (await response.json()) as Post[];
      setPosts(posts);
    };
    fetchData();
  }, []);

return (
  <div className="App">
    <h1>Data Fetching in React</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.id}. {post.title}</li>
      ))}
    </ul>
  </div>
);
}

export default QueryExample