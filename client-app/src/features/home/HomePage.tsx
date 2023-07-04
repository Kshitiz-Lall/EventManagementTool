import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Segment,
  Image,
  Icon,
} from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import LoginForm from "../users/LoginForm";
import RegsiterForm from "../users/RegsiterForm";
import AboutUs from "./AboutUs";

export default observer(function HomePage() {
  const { userStore, modalStore } = useStore();

  const renderContent = () => {
    if (userStore.isLoggedIn) {
      return (
        <>
          <Header
            as="h2"
            inverted
            content={`Welcome back, ${userStore.user?.displayName}!`}
          />
          <Button as={Link} to="/activities" size="huge" inverted>
            Go to Events!
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button
            onClick={() => modalStore.openModal(<LoginForm />)}
            size="huge"
            inverted
          >
            Login
          </Button>
          <Button
            onClick={() => modalStore.openModal(<RegsiterForm />)}
            size="huge"
            inverted
          >
            Register
          </Button>
        </>
      );
    }
  };

  return (
    <>
      <Segment inverted textAlign="center" vertical className="masthead">
        <Container text>
          <Header as="h2" inverted>
            Welcome to!
          </Header>
          <Image
            size="massive"
            src="/assets/genzeon-logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          <Header as="h3" inverted>
            An elegant solution for all your Event Management needs.
          </Header>
          {renderContent()}
        </Container>
      </Segment>
      <AboutUs />
    </>
  );
});
