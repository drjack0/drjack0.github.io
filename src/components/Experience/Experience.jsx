import React, { useContext, useEffect, useState } from 'react';
import {Fade} from 'react-awesome-reveal';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

import SkillsImg from '../Image/SkillsImg';

const Experience = () => {
  const { experience } = useContext(PortfolioContext);

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
    <section id="experience">
      <Container style={{"align":"center"}}>
        <div className="project-wrapper">
          <Title title="Experience" />
          <Row>
          {experience.map((elem) => {
            const { title, info, info2, url, repo, id } = elem;

            return (
                <Col key={id} lg={6} sm={12}>
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
                        className="cta-btn cta-btn--resume"
                        href={url}
                      >
                        More on this work
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

          <Title title="Technical Skills" />
          <Row style={{"marginTop":"10rem"}} >
            <Col>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div>
                  <SkillsImg alt={"img"} filename={"extra/aws.png"} />
                </div>
              </Fade>
            </Col>
            <Col>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div>
                  <SkillsImg alt={"img"} filename={"extra/node-js.png"} />
                </div>
              </Fade>
            </Col>
            <Col>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div>
                  <SkillsImg alt={"img"} filename={"extra/react-js.png"} />
                </div>
              </Fade>
            </Col>
            <Col>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div>
                  <SkillsImg alt={"img"} filename={"extra/javascript.png"} />
                </div>
              </Fade>
            </Col>
            <Col>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div>
                  <SkillsImg alt={"img"} filename={"extra/jupyter.png"} />
                </div>
              </Fade>
            </Col>
            <Col>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div>
                  <SkillsImg alt={"img"} filename={"extra/shopify.png"} />
                </div>
              </Fade>
            </Col>
          </Row>
          <Row style={{"marginBottom":"20rem"}}>
            <Col>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div>
                  <SkillsImg alt={"img"} filename={"extra/server.png"} />
                </div>
              </Fade>
            </Col>
            <Col>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div>
                  <SkillsImg alt={"img"} filename={"extra/html.png"} />
                </div>
              </Fade>
            </Col>
            <Col>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div>
                  <SkillsImg alt={"img"} filename={"extra/css.png"} />
                </div>
              </Fade>
            </Col>
            <Col>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div>
                  <SkillsImg alt={"img"} filename={"extra/github.png"} />
                </div>
              </Fade>
            </Col>
            <Col>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div>
                  <SkillsImg alt={"img"} filename={"extra/python.png"} />
                </div>
              </Fade>
            </Col>
            <Col>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div>
                  <SkillsImg alt={"img"} filename={"extra/wordpress.png"} />
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
