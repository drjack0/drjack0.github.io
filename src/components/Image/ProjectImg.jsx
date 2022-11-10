import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const ProjectImg = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: {
          absolutePath: { regex: "/images/" }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              width: 1336
              layout: CONSTRAINED
              )
          }
        }
      }
    }
  `);
  const image = data.images.nodes.find((n) => n.relativePath.includes(filename));
  if (!image) return null;
  const imageFluid = getImage(image.childImageSharp);
  return <GatsbyImage alt={alt} image={imageFluid} />;
    };

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
