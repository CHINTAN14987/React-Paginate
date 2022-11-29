import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const gridStyle = {
  width: "33%",
  textAlign: "center",
};
const gridContainer = {
  margin: "1rem",
};
const gridStylePosts = {
  width: "100%",
  fontSize: "2rem",
  fontWeight: "900",
  textAlign: "center",
};
const Post = () => {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    const response = await fetch("https://gorest.co.in/public/v1/posts/123");
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    fetchPost().then((response) => {
      setPosts(response.data);
    });
  }, []);
  console.log(posts);
  return (
    <Card style={gridContainer} title="Detailed Post:-">
      {Object.keys(posts)?.map((item, index) => {
        return (
          <Card.Grid style={gridStyle} key={index}>
            {posts[item]}
          </Card.Grid>
        );
      })}
    </Card>
  );
};

export default Post;
