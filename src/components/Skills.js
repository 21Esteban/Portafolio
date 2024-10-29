import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { technologies } from "../data/data";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Technologies I have experience with</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider "
                autoPlay={ true }
                autoPlaySpeed={1000}
              >
                {technologies.map((technologies, index) => (
                  <div className="item" key={index} >
                    <img src={technologies.img} alt="skills" style={{width:"200px"}}/>
                    <h3 >{technologies.name}</h3>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
