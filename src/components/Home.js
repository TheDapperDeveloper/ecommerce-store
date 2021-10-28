import React from "react";
import { Link } from "react-router-dom";

import SimpleImageSlider from "react-simple-image-slider";
import { SliderDiv, ExploreLink } from "../styled-components/HomeStyle";

const images = [
  {
    url: "https://cdn.motor1.com/images/mgl/o7YGL/s1/2011-aston-martin-one-77-q-series.jpg",
  },
  {
    url: "https://www.topgear.com/sites/default/files/2021/07/1%20BEH_2521.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1471289549423-04adaecfa1f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1705&q=80",
  },
];

export default function Home(props) {
  return (
    <div>
      <div>
        <SliderDiv>
          <h2>Used luxury cars available to all</h2>
          <h3>Featured</h3>
          <SimpleImageSlider
            images={images}
            width={896}
            height={504}
            showBullets={true}
            showNavs={true}
            loop={true}
            autoPlay={true}
          />
        </SliderDiv>
      </div>
      <ExploreLink to="/inventory">Explore</ExploreLink>
    </div>
  );
}
