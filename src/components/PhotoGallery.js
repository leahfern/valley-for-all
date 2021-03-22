import React, { useState } from 'react';
import Gallery from 'react-grid-gallery';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


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
          src: "https://drive.google.com/uc?export=view&id=1GGE7P4fUuuxGuD23wWTcL4TRLZe4XRWg",
          thumbnail: "https://drive.google.com/uc?export=view&id=1GGE7P4fUuuxGuD23wWTcL4TRLZe4XRWg",
          thumbnailWidth: 320,
          thumbnailHeight: 240
      },
      {
        src: "https://drive.google.com/uc?export=view&id=109mXNTiXxORasQPwk_FuIzUPuqiwNBsw",
        thumbnail: "https://drive.google.com/uc?export=view&id=109mXNTiXxORasQPwk_FuIzUPuqiwNBsw",
        thumbnailWidth: 240,
        thumbnailHeight: 320
      },
      {
          src: "https://drive.google.com/uc?export=view&id=1XjxYlBWvjxkh_ehMW4kzDxBOFP3qOuRS",
          thumbnail: "https://drive.google.com/uc?export=view&id=1XjxYlBWvjxkh_ehMW4kzDxBOFP3qOuRS",
          thumbnailWidth: 320,
          thumbnailHeight: 240
      },
      {
          src: "https://drive.google.com/uc?export=view&id=1CojqVajB0eDawdxLWkR9qlvXz3pNy_Y5",
          thumbnail: "https://drive.google.com/uc?export=view&id=1CojqVajB0eDawdxLWkR9qlvXz3pNy_Y5",
          thumbnailWidth: 320,
          thumbnailHeight: 240
      },
      {
          src: "https://drive.google.com/uc?export=view&id=1DQ00JOxrFJRx3SXT8LScywU_Lbp0fTNt",
          thumbnail: "https://drive.google.com/uc?export=view&id=1DQ00JOxrFJRx3SXT8LScywU_Lbp0fTNt",
          thumbnailWidth: 320,
          thumbnailHeight: 240
      },
      {
          src: "https://drive.google.com/uc?export=view&id=16Btv24dIgKMwJb-aHgEpMAxJEfP4knJY",
          thumbnail: "https://drive.google.com/uc?export=view&id=16Btv24dIgKMwJb-aHgEpMAxJEfP4knJY",
          thumbnailWidth: 320,
          thumbnailHeight: 240
      },
      {
          src: "https://drive.google.com/uc?export=view&id=1mQMToNhW8K2VvJR_SNu4ShHNS7I2Yvrl",
          thumbnail: "https://drive.google.com/uc?export=view&id=1mQMToNhW8K2VvJR_SNu4ShHNS7I2Yvrl",
          thumbnailWidth: 320,
          thumbnailHeight: 240
      },
      {
          src: "https://drive.google.com/uc?export=view&id=1X87cYbSQL1IGfHCBIb6ZrzWYA546VIFl",
          thumbnail: "https://drive.google.com/uc?export=view&id=1X87cYbSQL1IGfHCBIb6ZrzWYA546VIFl",
          thumbnailWidth: 320,
          thumbnailHeight: 240
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1mGoISZ6_WRcL62OZv6rlz-l5McoOKjNV",
        thumbnail: "https://drive.google.com/uc?export=view&id=1mGoISZ6_WRcL62OZv6rlz-l5McoOKjNV",
        thumbnailWidth: 240,
        thumbnailHeight: 320
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1S4nkx3ItDQi8O83WZmjwTyCqkeXTTiKY",
        thumbnail: "https://drive.google.com/uc?export=view&id=1S4nkx3ItDQi8O83WZmjwTyCqkeXTTiKY",
        thumbnailWidth: 320,
        thumbnailHeight: 240
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1ozbWufSwGIt7wRnPhBFHJE347ytajj65",
        thumbnail: "https://drive.google.com/uc?export=view&id=1ozbWufSwGIt7wRnPhBFHJE347ytajj65",
        thumbnailWidth: 320,
        thumbnailHeight: 240
      },
      {
        src: "https://drive.google.com/uc?export=view&id=1e4qpUknRBeAhzm7qHcEEV17ESUff15Ed",
        thumbnail: "https://drive.google.com/uc?export=view&id=1e4qpUknRBeAhzm7qHcEEV17ESUff15Ed",
        thumbnailWidth: 240,
        thumbnailHeight: 320
      }

  ]
};
