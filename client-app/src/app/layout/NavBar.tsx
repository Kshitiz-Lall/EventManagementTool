import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function NavBar() {
  const { activityStore } = useStore();
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/genzeon-logo2.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Event Management
        </Menu.Item>
        <Menu.Item name="Events" />
        <Menu.Item>
          <Button
            onClick={() => activityStore.openForm()}
            positive
            content="Create Event"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
