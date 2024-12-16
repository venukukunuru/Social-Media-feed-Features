import React, { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const PostForm = () => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        text,
        images: images.map((image) => URL.createObjectURL(image)),
        video: video ? URL.createObjectURL(video) : null,
        timestamp: serverTimestamp(),
        username: auth.currentUser.displayName || "Anonymous",
      };

      await addDoc(collection(db, "posts"), postData);
      setText("");
      setImages([]);
      setVideo(null);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <h3>Create a Post</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          rows="4"
          cols="50"
        ></textarea>

        <div>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <input type="file" accept="video/*" onChange={handleVideoChange} />
        </div>

        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
