import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Index = () => {
  const { title, lang, description, image } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Hello world! My name is Matteo Giaccone and I’m an aspiring full stack developer." />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="https://drjack0.github.io" />
        <meta property="og:type" content="website" />
      </Helmet>
      <App />
    </>
  );
};

export default Index;
