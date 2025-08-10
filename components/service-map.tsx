"use client";

import { useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

type ServicePoint = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  address: string;
  phone?: string;
  hours?: string;
};

// Dummy lokasi layanan
const points: ServicePoint[] = [
  {
    id: "srv-1",
    name: "Suwear Repair - Jakarta Pusat",
    lat: -6.175392,
    lng: 106.827153,
    address: "Monas, Jakarta Pusat",
    phone: "021-555-0101",
    hours: "09.00–18.00",
  },
  {
    id: "srv-2",
    name: "Suwear Repair - Jakarta Selatan",
    lat: -6.260713,
    lng: 106.810625,
    address: "Blok M, Jakarta Selatan",
    phone: "021-555-0202",
    hours: "10.00–19.00",
  },
  {
    id: "srv-3",
    name: "Suwear Repair - Depok",
    lat: -6.402484,
    lng: 106.794243,
    address: "Margonda, Depok",
    phone: "0251-555-0303",
    hours: "09.00–17.00",
  },
];

// Icon marker via CDN agar tidak bermasalah path-nya
const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function Recenter({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  map.setView([lat, lng], map.getZoom(), { animate: true });
  return null;
}

export function ServiceMap({
  className = "h-[70vh] w-full",
}: {
  className?: string;
}) {
  const defaultCenter = useMemo(() => ({ lat: -6.2, lng: 106.816666 }), []);
  const [center, setCenter] = useState(defaultCenter);

  const handleLocate = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => {},
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  return (
    <div className="relative w-full">
      <div className="absolute right-3 top-3 z-[1000]">
        <button
          onClick={handleLocate}
          className="rounded-md border bg-background/90 px-3 py-1.5 text-sm shadow hover:bg-accent"
        >
          Lokasi saya
        </button>
      </div>

      <MapContainer
        center={[center.lat, center.lng] as L.LatLngTuple}
        zoom={12}
        scrollWheelZoom
        className={`rounded-lg overflow-hidden ${className}`}
      >
        <Recenter lat={center.lat} lng={center.lng} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {points.map((p) => (
          <Marker key={p.id} position={[p.lat, p.lng]} icon={defaultIcon}>
            <Popup>
              <div className="space-y-1">
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm">{p.address}</div>
                {p.phone && <div className="text-sm">Telp: {p.phone}</div>}
                {p.hours && (
                  <div className="text-xs text-muted-foreground">
                    Jam: {p.hours}
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
export default ServiceMap;
