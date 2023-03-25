import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import "animate.css";

import Card from "react-bootstrap/Card";
import { data } from "../data/data";
import imggithub from "../assets/img/github.png";
import { FaEye, FaGithub } from "react-icons/fa";

export const Projects = () => {
  

  return (
    <section className="project" id="project">
      <h2>Projects</h2>
      <p className="neon">
        some of my projects, which demonstrate my skills and knowledge
      </p>
      <Container>
        {data.map((data, index) => (
          <Card
            style={{
              width: "18rem",
              background: "#434343",
              padding: "5px",
              borderRadius: "10px",
            }}
            key={index}
          >
            <Card.Img variant="top" src={data.img} />
            <Card.Body>
              <Card.Title>{data.proyect}</Card.Title>
              <Card.Text>{data.proyect}</Card.Text>
              <div className="githubanimate">
                <a href={data.repo} width={"10px"}>
                  <img src={imggithub} style={{ width: "70px" }} />
                </a>
                <a href={data.link} width={"10px"} style={{borderRadius:"50%"}}>
                <FaEye className="i" style={{width:"100px",color:"fff"}}/>
                </a>
                
              </div>
            </Card.Body>
          </Card>
        ))}

      </Container>
    </section>
  );
};
