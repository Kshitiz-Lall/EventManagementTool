import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import ContributorList from "./ContributorList";

const AboutUs = () => {
  return (
    <Segment inverted textAlign="center" vertical>
      <Container text>
        <Header as="h2" inverted>
          "The individuals who contributed to the development of this project."
        </Header>
        <ContributorList />
      </Container>
    </Segment>
  );
};

export default AboutUs;
