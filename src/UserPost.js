import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Card } from "antd";

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
const UserPost = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchPost = async () => {
    const response = await fetch(
      "https://gorest.co.in/public/v1/posts/?page=1&per_page=100"
    );
    const data = await response.json();
    return data;
  };
  const userPostHandler = () => {
    navigate("/post");
  };
  useEffect(() => {
    fetchPost().then((response) => {
      setPosts(response.data);
    });
  }, []);

  useEffect(() => {
    if (posts?.length > 0) {
      const filter = posts.filter((item) => item.user_id == id);
      setFilteredData(filter);
    }
  }, [posts]);

  return (
    <div>
      {filteredData?.length > 0 ? (
        filteredData?.map((item) => {
          const { user_id, title, body, id } = item;
          return (
            <Card
              key={id}
              style={gridContainer}
              title="User Posts:-"
              onClick={userPostHandler}
            >
              <Card.Grid style={gridStyle}>{user_id}</Card.Grid>
              <Card.Grid style={gridStyle}>{title}</Card.Grid>
              <Card.Grid style={gridStyle}>{body}</Card.Grid>
            </Card>
          );
        })
      ) : (
        <Card title="User Posts:-">
          <Card.Grid style={gridStylePosts}>"NO User Posts"</Card.Grid>
        </Card>
      )}
    </div>
  );
};

export default UserPost;
