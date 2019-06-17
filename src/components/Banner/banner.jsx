import React, { Component } from "react";
import "./banner.scss";
import bmw from "../../media/banners/BMW.png";
import bmwConsole from "../../media/banners/BMW_console.png";
import audi from "../../media/banners/audi.png";
import mustang from "../../media/banners/mustang.png";
import mustangFace from "../../media/banners/mustang_face.png";
import nissan from "../../media/banners/nissan_gtR.png";
import shavrolet from "../../media/banners/shevrolet.png";

const banners = [
  bmw,
  bmwConsole,
  audi,
  mustang,
  mustangFace,
  nissan,
  shavrolet
];

class Banner extends Component {
  render() {
    return (
      <div id="BannerComponent">
        <div className="banner-component">
          <img src={banners[0]} alt="bmw" />
        </div>
      </div>
    );
  }
}

export default Banner;
