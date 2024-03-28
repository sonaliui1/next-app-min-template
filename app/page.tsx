"use client";
import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import { Grid, Container } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";

export default function HomePage({}) {
  const [userData, setUserData] = useState([]);

  const handleDelete = (user: any) => {
    let list = userData.filter((item: any) => item.id !== user.id);
    setUserData(list);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  return (
    <Grid justify="left">
      <>
        {!!userData &&
          userData.map((user, index) => {
            return (
              <Grid.Col
                key={index}
                span={3}
                style={{ alignItems: "flext-start" }}
              >
                <UserCard key={index} user={user} handleDelete={handleDelete} />
              </Grid.Col>
            );
          })}
      </>
    </Grid>
  );
}
