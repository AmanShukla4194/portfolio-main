import { Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";
import "../pages/style.css";
import { Link, Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              {" "}
              Hello, I'm Aman Shukla, a React.js developer with a passion for
              creating engaging user interfaces. I'm also proficient in Python
              Django and MongoDB for backend development. My journey extends to
              the Cloud Computing , where I explore innovative solutions to
              enhance web applications. <br></br>
              <Link to="/Contact" style={{color:"blue"}}>
                <strong> Let's Connect </strong>
              </Link>
              <Routes>
                <Route path="/contact" element={<Contact />} />
              </Routes>
              I'm open to collaborations and eager to explore new opportunities
              in web development and cloud computing. Feel free to reach out,
              and let's discuss how we can work together to bring ideas to life.
            </p>
            <div className="skillsContainer">
              <div className="skill--scroll">
                <Marquee
                  gradient={false}
                  speed={60}
                  pauseOnClick={true}
                  delay={0}
                  play={true}
                  direction="left"
                >
                  {skillsData.map((skill, id) => (
                    <div className="skill--box" key={id}>
                      <img
                        className="skill-image"
                        src={skillsImage(skill)}
                        alt={skill}
                      />
                      <p>{skill}</p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
