import React, { useEffect, useState } from "react";

const MyAvatarComponent = () => {
  const [avatarUrl, setAvatarUrl] = useState("");

  const styles = {
    avatarContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "2px solid #ddd",
      backgroundColor: "#f0f0f0",
    },
    avatar: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const imageUrl = data.results[0].picture.large;
        setAvatarUrl(imageUrl);
      } catch (error) {
        console.error("Error fetching the random user image:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div style={styles.avatarContainer}>
      {avatarUrl && (
        <img src={avatarUrl} alt="User Avatar" style={styles.avatar} />
      )}
    </div>
  );
};

export default MyAvatarComponent;
