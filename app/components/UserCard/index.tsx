import React, { useState } from "react";
import {
  Card,
  Avatar,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  CardSection,
} from "@mantine/core";
import { IUserCard } from "./modal";
import classes from "./UserCard.module.css";
import {
  IconUserPlus,
  IconTrash,
  IconPhoneCall,
  IconAt,
  IconWorld,
  IconStar,
  IconUserMinus,
} from "@tabler/icons-react";

const UserCard = ({ user, handleDelete }: any) => {
  const [flag, setFlag] = useState(false);
  const handleFollow = (flag: any) => {
    setFlag(!flag);
  };
  return (
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <CardSection h={80} />
      <Avatar
        src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
        size={80}
        radius={80}
        mx="auto"
        mt={-60}
        className={classes.avatar}
      />

      {!!flag ? (
        <Group justify="center">
          <Text ta="center" fz="lg" fw={500} mt="sm">
            {user.name}
          </Text>
          <IconStar size={18} style={{ marginTop: "10px" }} />
        </Group>
      ) : (
        <Text ta="center" fz="lg" fw={500} mt="sm">
          {user.name}
        </Text>
      )}
      <Group justify="left" c="dimmed">
        <IconAt size={14} />

        <Text ta="left" fz="sm" c="dimmed">
          {user.email}
        </Text>
      </Group>
      <Group justify="left" c="dimmed">
        <IconPhoneCall size={14} />
        <Text ta="left" fz="sm">
          {user.phone}
        </Text>
      </Group>
      <Group justify="left" c="dimmed">
        <IconWorld size="14" />
        <Text ta="left" fz="sm" c="dimmed">
          {user.website}
        </Text>
      </Group>

      <Group justify="center" style={{ marginTop: "10px" }}>
        {!flag ? (
          <Button
            onClick={(e) => {
              handleFollow(flag);
            }}
            leftSection={<IconUserPlus size={14} />}
          >
            Follow
          </Button>
        ) : (
          <Button
            onClick={(e) => {
              handleFollow(flag);
            }}
            leftSection={<IconUserMinus size={14} />}
            variant="default"
          >
            UnFollow
          </Button>
        )}
        <Button
          variant="outline"
          leftSection={<IconTrash size={14} />}
          onClick={(e) => {
            handleDelete(user);
          }}
        >
          Delete
        </Button>
      </Group>
    </Card>
  );
};

export default UserCard;
