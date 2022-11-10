import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const SkillsImg = ({ filename, alt }) => {
  const data  = useStaticQuery(graphql`
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
            width: 65
            layout: FIXED
            )
        }
      }
    }
  }
`);
const image = data.images.nodes.find((n) => n.relativePath.includes(filename));
if (!image) {
  return null
}
const imageFixed = getImage(image.childImageSharp);
      return <GatsbyImage alt={alt} image={imageFixed} />;
    }

SkillsImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default SkillsImg;
