import { Link } from "react-router-dom";
import { Button, Container, Header, Image, Segment } from "semantic-ui-react";

export default function HomePage() {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/genzeon-logo2.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          GENZEON
        </Header>
        <Header as="h2" inverted content="Welcome To Event Management App " />
        <Button as={Link} to="/activities" size="huge" inverted>
          Take me to the Events!
        </Button>
      </Container>
    </Segment>
  );
}
