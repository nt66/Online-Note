import React from "react";
import "./GTMtest.less";

const GTMtest: React.FC = () => {
  return (
    <div className="gtm-test">
      <h1>GTM Test </h1>
      <div className="test-content">
        <iframe
          width="560"
          height="315"
          // src="https://www.youtube.com/embed/fMevmwbwVh8?enablejsapi=1"
          src="https://www.youtube.com/embed/fMevmwbwVh8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default GTMtest;
