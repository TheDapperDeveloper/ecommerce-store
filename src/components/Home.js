import React from "react";
import { Link } from "react-router-dom";

import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://cdn.motor1.com/images/mgl/o7YGL/s1/2011-aston-martin-one-77-q-series.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1607892378625-68c08a8e038d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1566023888476-6f17e362fbb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80",
  },
];

export default function Home(props) {
  return (
    <div>
      <h2>Used luxury cars available to all</h2>
      <div>
        <h3>Featured</h3>
        <div className="sliderimage">
          <SimpleImageSlider
            images={images}
            width={896}
            height={504}
            showBullets={true}
            showNavs={true}
            loop={true}
            autoPlay={true}
          />
        </div>
      </div>
      <Link to="/inventory">Explore</Link>
    </div>
  );
}
