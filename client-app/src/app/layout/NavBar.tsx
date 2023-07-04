import { Button, Container, Dropdown, Menu, Image } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function NavBar() {
  const {
    userStore: { user, logout },
  } = useStore();
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" header>
          <img
            src="/assets/genzeon-logo2.png"
            alt="logo"
            style={{ marginRight: 10 }}
          />
          Genzeon
        </Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="All Event" />
        {/* <Menu.Item as={NavLink} to="/errors" name="Errors" /> */}
        <Menu.Menu position="right">
          <Menu.Item>
            <Button
              as={NavLink}
              to="/createActivity"
              positive
              content="Create Event"
            />
          </Menu.Item>
          <Menu.Item>
            <Image
              avatar
              spaced="right"
              src={user?.image || "/assets/user.png"}
            />
            <Dropdown pointing="top left" text={user?.displayName}>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to={`/profiles/${user?.username}`}
                  text="My Profile"
                  icon="user"
                />
                <Dropdown.Item onClick={logout} text="Logout" icon="power" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
});
