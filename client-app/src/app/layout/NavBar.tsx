import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" header>
          <img
            src="/assets/genzeon-logo2.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Event Management
        </Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="Events" />
        <Menu.Item>
          <Button
            as={NavLink}
            to="/createActivity"
            positive
            content="Create Event"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
