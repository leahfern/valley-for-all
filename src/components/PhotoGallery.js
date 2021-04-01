import React, { useState } from 'react';
import Gallery from 'react-grid-gallery';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import img2 from '../assets/images/gallery/img-2-lg.jpg';
import img2Thumb from '../assets/images/gallery/img-2-thumb.jpg';
import img5 from '../assets/images/gallery/img-5-lg.jpg';
import img5Thumb from '../assets/images/gallery/img-5-thumb.jpg';
import img6 from '../assets/images/gallery/img-6-lg.jpg';
import img6Thumb from '../assets/images/gallery/img-6-thumb.jpg';
import img7 from '../assets/images/gallery/img-7-lg.jpg';
import img7Thumb from '../assets/images/gallery/img-7-thumb.jpg';
import img8 from '../assets/images/gallery/img-8-lg.jpg';
import img8Thumb from '../assets/images/gallery/img-8-thumb.jpg';
import img9 from '../assets/images/gallery/img-9-lg.jpg';
import img9Thumb from '../assets/images/gallery/img-9-thumb.jpg';
import img11 from '../assets/images/gallery/img-11-lg.jpg';
import img11Thumb from '../assets/images/gallery/img-11-thumb.jpg';
import img12 from '../assets/images/gallery/img-12-lg.jpg';
import img12Thumb from '../assets/images/gallery/img-12-thumb.jpg';
import img13 from '../assets/images/gallery/img-13-lg.jpg';
import img13Thumb from '../assets/images/gallery/img-13-thumb.jpg';
import map from '../assets/images/gallery/map.png';
import mapThumb from '../assets/images/gallery/map-thumb.png';


export default class PhotoGallery extends React.Component {
  constructor(props){
      super(props);

      this.state = {
          images: this.props.images
      };

  }



  render () {
      return (
              <div style={{
                  display: "block",
                  minHeight: "1px",
                  width: "100%",
                  zIndex: "-5",
                  overflow: "auto"}}>
              <Gallery
                images={this.state.images}
                enableImageSelection={false}
              />
              </div>
      );
  }
}

PhotoGallery.propTypes = {
  images: PropTypes.arrayOf(
      PropTypes.shape({
          src: PropTypes.string.isRequired,
          thumbnail: PropTypes.string.isRequired,
          srcset: PropTypes.array,
          caption: PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.element
          ]),
          thumbnailWidth: PropTypes.number.isRequired,
          thumbnailHeight: PropTypes.number.isRequired
      })
  ).isRequired
};

PhotoGallery.defaultProps = {
  images: [
      {
          src: map,
          thumbnail: mapThumb,
          thumbnailWidth: 320,
          thumbnailHeight: 240
      },
      {
        src: img12,
        thumbnail: img12Thumb,
        thumbnailWidth: 240,
        thumbnailHeight: 320
      },
      {
        src: img2,
        thumbnail: img2Thumb,
        thumbnailWidth: 320,
        thumbnailHeight: 240
      },
      {
          src: img5,
          thumbnail: img5Thumb,
          thumbnailWidth: 320,
          thumbnailHeight: 240
      },
      {
          src: img6,
          thumbnail: img6Thumb,
          thumbnailWidth: 320,
          thumbnailHeight: 240
      },
      {
        src: img13,
        thumbnail: img13Thumb,
        thumbnailWidth: 240,
        thumbnailHeight: 320
      },
      {
        src: img7,
        thumbnail: img7Thumb,
        thumbnailWidth: 320,
        thumbnailHeight: 240
      },
      {
        src: img8,
        thumbnail: img8Thumb,
        thumbnailWidth: 320,
        thumbnailHeight: 240
      },
      {
        src: img9,
        thumbnail: img9Thumb,
        thumbnailWidth: 240,
        thumbnailHeight: 320
      },
      {
        src: img11,
        thumbnail: img11Thumb,
        thumbnailWidth: 320,
        thumbnailHeight: 240
      }

  ]
};
