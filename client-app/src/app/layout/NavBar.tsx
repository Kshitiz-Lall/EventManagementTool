import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface Props {
  openForm: () => void;
}

export default function NavBar({ openForm }: Props) {
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
          <Button onClick={openForm} positive content="Create Event" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
