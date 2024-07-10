import React, { useState } from 'react';
import './Maps.css';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importar os ícones do Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configurar o ícone do marcador
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function LocationMarker({ onClick }) {
  useMapEvents({
    click(e) {
      onClick(e.latlng);
    },
  });

  return null;
}

function Maps() {
  const [marker, setMarker] = useState(null);
  const [form, setForm] = useState({
    title: '',
    type: 'Animal',
    description: '',
    coordinates: '',
  });

  const handleMapClick = (latlng) => {
    setMarker(latlng);
    setForm((prevForm) => ({
      ...prevForm,
      coordinates: `${latlng.lat}, ${latlng.lng}`,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica para salvar a marcação
    console.log('Form Data:', form, 'Marker:', marker);
  };

  return (
    <div className="maps-container">
      <div className="form-section">
        <h2>Realiza Marcação</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Tipo</label>
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={handleChange}
            >
              <option value="Animal">Animal</option>
              <option value="Planta">Planta</option>
              <option value="Ecosistema">Ecosistema</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="coordinates">Coordenadas</label>
            <input
              type="text"
              id="coordinates"
              name="coordinates"
              value={form.coordinates}
              onChange={handleChange}
              readOnly
            />
          </div>
          <button type="submit">Salvar</button>
        </form>
      </div>
      <div className="map-section">
        <MapContainer center={[-29.9177, -51.1839]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker onClick={handleMapClick} />
          {marker && (
            <>
              <Circle
                center={marker}
                pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.5 }}
                radius={50}
              />
              <Marker position={marker} icon={defaultIcon}>
                <Popup>
                  <div>
                    <h3>{form.title || 'Título não definido'}</h3>
                    <p>{form.description || 'Descrição não definida'}</p>
                  </div>
                </Popup>
              </Marker>
            </>
          )}
        </MapContainer>
      </div>
    </div>
  );
}

export default Maps;
