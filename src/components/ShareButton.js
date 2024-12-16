import React from "react";

const ShareButton = ({ url, title }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          url: url,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Share failed:", error));
    } else {
      console.log("Share API not supported");
    }
  };

  return <button onClick={handleShare}>Share</button>;
};

export default ShareButton;
