import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

import { send } from 'emailjs-com';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  const [toSend, setToSend] = useState({
    name: '',
    surname: '',
    topic: '',
    message: '',
    email: '',
  });

  const [resForm, setResForm] = useState({
    formRes: false,
    formRet: ''
  });

  const sendChecker = (obj) => {
    if(obj.name === '' || obj.surname === '' || obj.email === '' || obj.topic === '' || obj.message === ''){
      return false;
    } else {
      return true;
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(sendChecker(toSend) === true){
      send(
        process.env.GATSBY_EMAILJS_SERVICE_ID,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID,
        toSend,
        process.env.GATSBY_EMAILJS_USER_ID
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          clearState();
          setResForm({...resForm, formRes: true, formRet: response.text});
        })
        .catch((err) => {
          console.log('FAILED...', err);
          setResForm({...resForm, formRes: false, formRet: err});
        });
    } else {
      setResForm({...resForm, formRes: false, formRet: "Please, compile all the form's inputs"})
    }
    
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const clearState = () => {
    setToSend({ ...toSend, 
      name: '',
      surname: '',
      email: '',
      topic: '',
      message: ''

    });
  }

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta}
            </p>
            
            <div className="formContainer">
              <form>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  className="formInput contact-wrapper__text"
                  value={toSend.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type='text'
                  name='surname'
                  placeholder='Surname'
                  className="formInput contact-wrapper__text"
                  value={toSend.surname}
                  onChange={handleChange}
                  required
                />
                <input
                  type='text'
                  name='email'
                  placeholder='Email'
                  className="formInput contact-wrapper__text"
                  value={toSend.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type='text'
                  name='topic'
                  placeholder='Topic'
                  className="formInput contact-wrapper__text"
                  value={toSend.topic}
                  onChange={handleChange}
                  required
                />
                <textarea
                  className="formInput contact-wrapper__text"
                  name="message"
                  placeholder="Message"
                  value={toSend.message}
                  onChange={handleChange}
                  required
                />
              </form>

              {resForm.formRes ?
                <Fade bottom duration={1000} delay={800} distance="30px">
                  <p className="contact-wrapper__text">MESSAGE SENT!</p>
                </Fade>
                : (resForm.formRet !== "" ? 
                  <Fade bottom duration={1000} delay={800} distance="30px">
                    <p className="contact-wrapper__text">{resForm.formRet}</p>
                  </Fade> : null)}

              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href=""
                onClick={onSubmit}
              >
                {btn}
              </a>
            </div>

            <p className="contact-wrapper__text">
              Or contact me at {'  '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
