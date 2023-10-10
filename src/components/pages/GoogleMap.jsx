import React, { useEffect } from "react";

function GoogleMap({ location }) {
  useEffect(() => {
    const iframeData = document.getElementById("iframeId");
    iframeData.src = `https://maps.google.com/maps?q=${encodeURIComponent(location)}&hl=es;&output=embed`;
  }, [location]);

  return (
    <div>
      <iframe title="Google Map" id="iframeId" height="500px" width="100%"></iframe>
    </div>
  );
}

export default GoogleMap;
