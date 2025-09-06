import React from 'react'
import { MapFrame } from '../atoms/contactMapFreim'
import { MapFoot } from '../atoms/contactMapFoot'
import { MapControls } from '../molecules/contactMapControls'
import './contactGoogleMaps.css'

 function ContactGoogleMap({
  address = "Dos de Mayo 1330, Celendín 06225",
  zoom = 17,
  height = "450px",
  className = "",
}) {
  const query = encodeURIComponent(address);
  const src = `https://www.google.com/maps?q=${query}&z=${zoom}&output=embed`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <div
      className={`map-container ${className || ""}`}
      style={height ? { height } : undefined}
    >
      <iframe
        title={`Mapa de ${address}`}
        src={src}
        className="map-iframe"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <MapControls mapsUrl={mapsUrl} />
      <MapFoot address={address} />
    </div>
  );
}




export {ContactGoogleMap}