import React, { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Axios from "axios";
import "./App.css";

function App() {
  const url =
    "https://api.unsplash.com/photos/random?client_id=GyZOYNw2WDdhqtO7lJ15YjfNWgawTCyDF7GS2AMEU_s&count=100";
  const [images, setImages] = useState([]);
  const getImages = () => {
    Axios.get(url).then((res) => {
      setImages(res.data);
      console.log(res);
    });
  };
  useEffect(() => {
    getImages();
  }, []);
  if (!images) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      {images.map((image) => {
        return (
          <LazyLoadImage
            effect="blur"
            src={image.urls.regular}
            alt={image.alt_description}
            key={image.id}
            height="400px"
            placeholderSrc={process.env.PUBLIC_URL + '/logo192.png'}
          />
        );
      })}
    </div>
  );
}

export default App;
