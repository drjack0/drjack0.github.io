import React, { useContext, useEffect, useState } from 'react';
import {Fade} from 'react-awesome-reveal';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Education = () => {
  const { education } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="education">
      <Container>
        <div className="project-wrapper">
          <Title title="Education" />
          <Row>
          {education.map((elem) => {
            const { title, info, info2, url, repo, id } = elem;

            return (
                <Col key={id} lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title}</h3>
                      <div>
                        <p>
                          {info}
                        </p>
                        <p className="mb-4">{info2}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url}
                      >
                        More on the institute
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                      </Fade>
                </Col>
            );
          })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Education;
