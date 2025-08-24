"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ position, center, children }) {
  return (
    <>
      <MapContainer
        className="rounded-[10px] h-[300px] w-full"
        center={center}
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Set Coffee</Popup>
        </Marker>
      </MapContainer>
      <div className="mt-[-73px] mx-[50px] p-2 pr-5 pb-4 pl-2 bg-white shadow-lg z-[9999] relative">{children}</div>
    </>
  );
}
