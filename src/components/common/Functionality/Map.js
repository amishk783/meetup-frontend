import {useEffect, useState} from "react";
import ReactMapGl, { Marker  } from "react-map-gl";
import mapboxgl from "mapbox-gl";

import { MapPin } from "lucide-react";


mapboxgl.accessToken =
  "pk.eyJ1IjoiYW1pc2hrNzgzIiwiYSI6ImNscjE5aHRwNTAyNGsya284d2c3cWJidG4ifQ.S02xNi52fY5e3Ft10zFP4A";

const SHOWMAP = ({ address }) => {
  const [viewport, setViewport] = useState({
    width: 500,
    height: 450,
    latitude: 27,
    longitude: 76.5,
    zoom: 10,
  });
  const [markerCoordinates, setMarkerCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const fetchCoords = async () => {
      const geocodingApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
      )}.json?access_token=${process.env.REACT_APP_MAPBOX}`;
      await fetch(geocodingApiUrl)
        .then((response) => response.json())
        .then((data) => {
          const [longitude, latitude] = data.features[0].center;
          setMarkerCoordinates({ latitude, longitude });
          setViewport((nextViewport) => ({
            ...nextViewport,
            latitude,
            longitude,
            zoom: 13,
          }));
        })
        .catch((error) => {
          console.error("Error fetching coordinates from the address:", error);
        });
    };
    fetchCoords().catch((error) => {
      console.log(error);
    });
  }, [address]);
  console.log(markerCoordinates);
  return (
    <div className="">
      <div className="relative border-red-600 rounded-lg overflow-hidden">
        <ReactMapGl
          style={{
            width: 500,
            height: 350,
          }}
          {...viewport}
          // initialViewState={viewport}
          mapboxAccessToken={process.env.REACT_APP_MAPBOX}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          mapStyle="mapbox://styles/amishk783/clr28g2g801ao01o3b3lwcvyl"
        >
          
          <Marker
            latitude={markerCoordinates.latitude}
            longitude={markerCoordinates.longitude}
            offsetBottom={-20}
            offsetTop={-10}
          >
            <MapPin style={{ color: "slateblue" }} size={viewport.zoom * 3} />
          </Marker>

        </ReactMapGl>
      </div>
    </div>
  );
};

export default SHOWMAP;
