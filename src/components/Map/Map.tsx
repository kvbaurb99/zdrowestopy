import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "500px",
    width: "100%",
  };

  const position = {
    lat: 49.795838818014296,
    lng: 18.94712238268815,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={16} center={position}>
      <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
