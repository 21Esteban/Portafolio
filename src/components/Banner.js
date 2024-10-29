import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Creating experiences, not just websites","Full Stack Developer","c++ Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    } 
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div className="animate__animated animate__fadeIn" >
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Esteban`} <span className="txt-rotate" ><span className="wrap">{text}</span></span></h1>
                  <p>Hi, I'm Juan Esteban and I'm 18 years old, I currently live in Colombia, I like technology, I'm a full Stack developer, in my portfolio you can find a selection of some of my projects, which demonstrate my skills and knowledge, I am always looking to learn and improve and take on new challenges and opportunities </p>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


