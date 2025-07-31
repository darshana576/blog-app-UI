import { useContext } from "react";
import { Card, CardText, CardTitle, Row, Col, CardFooter } from "reactstrap";
import Base from "../Components/Base";
import { UserContext } from "../Context/UserProvider";
import "../Css/Landing.css";
import { BASE_URL, BlogsPageBackground } from "../Services/helper";

const About = () => {
  const user = useContext(UserContext);
  return (
    <Base>
      <Row
        className="margin-fix background"
        style={{
          backgroundImage: `url("${BASE_URL}post/image/${BlogsPageBackground}")`,
        }}
      >
        <Col
          md={{ size: 10 }}
          className="text-center"
          style={{
            margin: "auto",
            paddingTop: "3%",
            paddingBottom: "3%",
          }}
        >
          <Card className="border-0">
            <CardTitle>
              <h1>About Blogster</h1>
            </CardTitle>
            <CardText>
              <p style={{ fontSize: "18px" }}>
                <i>
                  "A place to share stories, experiences, and perspectives that inspire change."
                </i>
              </p>
            </CardText>
            <CardFooter>
              <p>
                <b>Designed and developed by Darshana Agarwal</b>
              </p>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Base>
  );
};

export default About;
