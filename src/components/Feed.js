import React, { useState, useEffect } from "react";
import VideoHandler from "./VideoHandler";
import ShareButton from "./ShareButton";
import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const videoUrls = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://www.w3schools.com/html/horse.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/horse.mp4",
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=6`
        );
        const data = await response.json();
        setPosts((prevPosts) => [...prevPosts, ...data]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  const handleScroll = () => {
    const bottom =
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight;
    if (bottom && !loading) {
      setPage(page + 1);
      setLoading(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="feed-container">
      <h2 style={{ display: "flex", marginTop: "-3rem" }}>Feed</h2>
      <div className="posts-grid">
        {posts.map((post, index) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <div className="video-wrapper">
              <VideoHandler videoUrl={videoUrls[index % videoUrls.length]} />
            </div>
            {/* Add the ShareButton below each post */}
            <div className="share-button-container">
              <ShareButton
                url={`https://jsonplaceholder.typicode.com/posts/${post.id}`}
                title={post.title}
              />
            </div>
          </div>
        ))}
      </div>
      {loading && <div>Loading more posts...</div>}
    </div>
  );
}

export default Feed;
