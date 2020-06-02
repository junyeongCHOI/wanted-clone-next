import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const GoogleMapContainer = ({ google, lat, lng }) => {
  return (
    <Map
      google={google}
      style={{
        width: "100%",
        height: "100%",
      }}
      zoom={15}
      initialCenter={{
        lat: lat,
        lng: lng,
      }}
    >
      <Marker position={{ lat: lat, lng: lng }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBHcOwAeUwpjfF42gMxiBqGBMbHEwGzja8",
  language: "korean",
})(GoogleMapContainer);
