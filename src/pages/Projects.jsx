import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import instagramCloneImg from "../assets/projects/clone.webp";
import exploreXpertsImg from "../assets/projects/kickstart.png";
import onlineExamSystemImg from "../assets/projects/project.jpeg";
import passwordGeneratorImg from "../assets/projects/password.webp";
import calculatorImg from "../assets/projects/calculator.png";
import objectDetectionImg from "../assets/projects/detection.webp";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instagramCloneImg}
              isBlog={false}
              title="Instagram Clone"
              description="Developed a user-friendly Instagram Clone website offering a seamless social media experience through features like photo posting, following, liking, and personalized feeds. The platform boasts a modern design with advanced features, providing an engaging environment for users to connect and share moments visually."
              ghLink="https://github.com/Akilion47/Instagram_clone"
              demoLink="https://your-demo-link.com/instagram-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exploreXpertsImg}
              isBlog={false}
              title="Explore Xperts - Travel Agency Website"
              description="Designed a fictional travel agency website showcasing popular destinations and travel packages. Built using HTML, CSS, and JavaScript, this project highlights key features like tour searches, destination displays, package listings, and traveler-submitted photo galleries."
              ghLink="https://github.com/Akilion47/ExploreXperts"
              demoLink="https://akilion47.github.io/ExploreXperts/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlineExamSystemImg}
              isBlog={false}
              title="Online Exam System"
              description="Implemented an Online Exam System in Java, allowing users to log in, sign up, update their profiles and passwords, and take exams. The system provides a menu-based interface for easy navigation and utilizes a timer to manage exam durations."
              ghLink="https://github.com/Akilion47/Online-Exam-System"
              demoLink="https://your-demo-link.com/online-exam-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passwordGeneratorImg}
              isBlog={false}
              title="Password Generator"
              description="Built a Python tool to generate and encrypt secure passwords using cryptography. Enabled secure password storage and retrieval with a user-friendly interface."
              ghLink="https://github.com/Akilion47/Password-Generator"
              demoLink="https://your-demo-link.com/password-generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculatorImg}
              isBlog={false}
              title="Scientific Calculator"
              description="Created a web-based Scientific Calculator built using HTML, CSS, and Vue.js. The calculator offers various scientific functions and provides users with a responsive and intuitive interface for performing complex calculations."
              ghLink="https://github.com/Akilion47/Calculator"
              demoLink="https://your-demo-link.com/calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={objectDetectionImg}
              isBlog={false}
              title="Object Detection and Tracking"
              description="Contributed to the development of an Object Detection and Tracking system. This project focuses on implementing algorithms for detecting and tracking objects in videos, providing valuable insights for applications in surveillance and automation."
              ghLink="https://github.com/Akilion47/object-detection-and-tracking"
              demoLink="https://your-demo-link.com/object-detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
