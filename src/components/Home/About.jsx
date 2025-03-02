import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Ayush Kadyan</span>
                 and I'm from <span className="yellow">Haryana, India.</span>
                <br />
                <br />
                I am currently pursuing my Bachelor's degree in <b className="yellow">Electronics and Communication Engineering</b> from UIET Kurukshetra University.
                <br />
                <br />
                As a passionate <b className="yellow">Web Developer</b>, I love creating dynamic and engaging web applications. I have experience working with both <b className="yellow">Frontend and Backend</b> technologies.
                <br />
                <br />
                My technical expertise includes <b className="yellow">JavaScript, Java, C, C++, Python</b>, and frameworks like <b className="yellow">React.js, Node.js, and Django</b>.
                <br />
                <br />
                I have completed internships at <b className="yellow">Next24tech Technology & Services, Prodigy InfoTech, and Oasis Infobyte</b>, where I worked on developing full-stack applications, improving UI/UX, and integrating backend services.
                <br />
                <br />
                Some of my key projects include:
                <ul>
                  <li><b className="yellow">Instagram Clone</b> - Developed a social media platform with interactive features.</li>
                  <li><b className="yellow">Online Bookstore</b> - A Python-MySQL based bookstore system.</li>
                  <li><b className="yellow">Explore Xperts</b> - A travel agency website with an intuitive UI.</li>
                  <li><b className="yellow">Online Reservation System</b> - A Java-based train reservation system.</li>
                </ul>
                <br />
                Apart from development, I have actively participated in hackathons, achieving <b className="yellow">2nd place in Kavach 2023 Internal Hackathon</b> and <b>3rd place in Inter-College RoboWar (Excelsior 2K22)</b>.
                <br />
                <br />
                I am also a <b className="yellow">Microsoft Learn Student Ambassador</b> and serve as a <b className="yellow">Coordinator</b> at the <b>Training & Placement Cell, UIET</b>.
                <br />
                <br />
                <b className="yellow">Let's build something amazing together!</b>
                </p>
              </Col>
              <Col md={4} className="myAvtar" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
                <Button 
                  variant="primary" 
                  href="https://your-link.com" 
                  target="_blank"
                  style={{ marginTop: "30px" }}
                >
                  Visit My Portfolio
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/Akilion47"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/ayush-kadyan-2bba59246/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://leetcode.com/u/Akilion/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="leetcode"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
}

export default About;
