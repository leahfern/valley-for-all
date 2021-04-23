import React, { Component } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export default class LoaderHolder extends Component {
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="white"
        height={16}
        width={16}
        timeout={3000} //3 secs
      />
    );
  }
}