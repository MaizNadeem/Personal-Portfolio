import React, { useEffect } from "react";

const WistiaVideo = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/embed/medias/cafgdxps6z.jsonp";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="wistia_responsive_padding" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
      <div className="wistia_responsive_wrapper" style={{ height: "100%", left: 0, position: "absolute", top: 0, width: "100%" }}>
        <div className="wistia_embed wistia_async_cafgdxps6z seo=true videoFoam=true" style={{ height: "100%", position: "relative", width: "100%" }}>
          <div className="wistia_swatch" style={{ height: "100%", left: 0, opacity: 0, overflow: "hidden", position: "absolute", top: 0, transition: "opacity 200ms", width: "100%" }}>
            <img src="https://fast.wistia.com/embed/medias/cafgdxps6z/swatch" style={{ filter: "blur(5px)", height: "100%", objectFit: "contain", width: "100%" }} alt="" aria-hidden="true" onLoad={(e) => e.target.parentNode.style.opacity = 1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WistiaVideo;
