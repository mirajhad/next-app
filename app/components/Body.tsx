import profile from "../assets/profile1.JPG";
import Image from "next/image";
import React from "react";

const Body = () => {
  return (
    <div className="container">
      <div className="mypic">
        <Image
          src={profile} // Path to your image in the `public` directory
          alt="Your image description"
          width={300} // Desired width of the image
          height={300} // Desired height of the image
          priority={true}
          className="profile"
        />
      </div>
      <div className="mypic name">
        <h2 className="animate-charcter">Md Miraj Ansari</h2>
      </div>

      <div className="mypic">
        <h1 className="h1">
          <span className="span">always be</span>
          <div className="message">
            <div className="word1">close</div>
            <div className="word2">code</div>
            <div className="word3">creating</div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Body;