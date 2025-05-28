import React, { useEffect, useRef } from 'react';
import { Cafe } from '../types';

interface MapViewProps {
  cafe: Cafe;
  height?: string;
}

const MapView: React.FC<MapViewProps> = ({ cafe, height = 'h-96' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // In a real application, this would initialize a map with the Google Maps API
    // For now, we'll create a simple placeholder that would be replaced with actual map
    if (mapRef.current) {
      const iframe = document.createElement('iframe');
      
      // Create a Google Maps embed URL
      const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=${encodeURIComponent(
        cafe.name + ',' + cafe.location.city + ',' + cafe.location.country
      )}&center=${cafe.location.coordinates.lat},${cafe.location.coordinates.lng}&zoom=15`;
      
      iframe.src = mapUrl;
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.style.border = '0';
      iframe.allowFullscreen = true;
      
      // In a real application with an API key, we would actually load the map
      // For now, we'll just show a placeholder with the location info
      
      mapRef.current.innerHTML = '';
      
      const placeholderDiv = document.createElement('div');
      placeholderDiv.className = 'w-full h-full bg-zinc-100 dark:bg-zinc-800 rounded-xl flex flex-col items-center justify-center p-4 text-center';
      
      const locationText = document.createElement('p');
      locationText.className = 'text-zinc-600 dark:text-zinc-300 mb-2';
      locationText.textContent = `${cafe.name} is located in ${cafe.location.city}, ${cafe.location.country}`;
      
      const coordinatesText = document.createElement('p');
      coordinatesText.className = 'text-zinc-500 dark:text-zinc-400 text-sm';
      coordinatesText.textContent = `Coordinates: ${cafe.location.coordinates.lat.toFixed(4)}, ${cafe.location.coordinates.lng.toFixed(4)}`;
      
      const noteText = document.createElement('p');
      noteText.className = 'text-amber-600 dark:text-amber-400 text-xs mt-4 max-w-md';
      noteText.textContent = 'Note: In a production environment, this would display an interactive Google Map. You would need to add your Google Maps API key to enable this feature.';
      
      placeholderDiv.appendChild(locationText);
      placeholderDiv.appendChild(coordinatesText);
      placeholderDiv.appendChild(noteText);
      
      mapRef.current.appendChild(placeholderDiv);
    }
  }, [cafe]);

  return (
    <div ref={mapRef} className={`${height} w-full rounded-xl overflow-hidden shadow-md`}></div>
  );
};

export default MapView;