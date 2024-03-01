import { useEffect, useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { Loader } from "lucide-react";
import { MapPin } from "lucide-react";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

const SHOWMAP = ({ address, w, h }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({
    error: null,
    message: "",
  });

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
      setIsLoading(true);
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
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setError({
            error: true,
            message: "Error fetching coordinates from the address",
          });
          console.error("Error fetching coordinates from the address:", error);
        });
    };
    fetchCoords().catch((error) => {
      setError({
        error: true,
        message: "Internal server error fetching coordinates from the address",
      });
      setIsLoading(false);
      console.log(error);
    });
  }, [address]);

  return (
    <div className="">
      <div className="relative flex items-center justify-center  border-red-600 rounded-lg overflow-hidden">
        <div className="absolute z-10 ">
          {isLoading && (
            <p className=" text-green-400 text-center">
              <Loader className=" animate-spin" size={48} />
            </p>
          )}
        </div>
        <div className="-z-10">
          <ReactMapGl
            style={{
              width: w,
              height: h,
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
          {error.error && (
            <p className="py-3 text-lg text-red-400">{error.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SHOWMAP;
