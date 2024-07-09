// Map.tsx

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import pinImg from "@/public/assets/images/pin.png";

const customIcon = new L.Icon({
  iconUrl: pinImg.src,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

type MarkerData = {
  geocode: [number, number];
  popupText: string;
  title:string;
  place: string;
};

const markers: MarkerData[] = [
  {
    geocode: [-33.865143, 151.209900],
    popupText: "Prabjyot Kaur leverages over 20 years of expertise in financial technologies and SaaS products to deliver cutting edge solutions for the banking and finance sector. Proficient in driving product development from ideation to implementation with rich user experience.She possesses strong leadership skills by leading team of various sized, handling multifunctional team collaboration and maintain strong relationship with key stakeholders.",
    title: "IT Technology Officer",
    place: "Prabjyot Kaur",
  },
  {
    geocode: [40.0583, -74.4057],
    popupText: "Davinder is the founder of Zenith Solutions LLC. He has over 20 years of experience in finance, accounting and technology industry. He has been in Workday ecosystem more than 8 years. He started his Workday journey with Cushman and Wakefield and worked for a Workday partner firm. He has extensive experience in different Industries such as Retail, Real-estate, Utilities, Healthcare and Higher Education. He enjoys playing tennis and cricket. He is a great fan of Sachin Tendulkar, Roger Federer and Michal Schumacher.",
    title: "Founder",
    place: "Davinder Singh",
  },
  {
    geocode: [7.1907, 125.4553],
    popupText: "Xave is a Certified Public Accountant with over four years of experience in financial accounting and reporting, auditing, and process improvement, with a strong focus on enhancing Workday end-user experience. She has a proven track record of identifying bottlenecks in processes and implementing effective solutions to overcome them. Xave is adept at streamlining workflows to increase efficiency and accuracy. In her spare time, she enjoys reading and cooking, which reflects her meticulous attention to detail and creativity both professionally and personally.",
    title: "Accounts Officer",
    place: "Xave",
  },
  // {
  //   geocode: [8.1907, 125.4553],
  //   title: "Text",
  //   popupText: "Hello from New Delhi!",
  //   place: "New Delhi",
  // },
  
];

const Map: React.FC = () => {
  return (
    <div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={1.5}
        scrollWheelZoom={false}
        className="h-[80vh] rounded-3xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>
              <div className="flex gap-7">
                <div className="bg-orange-400 w-[2rem]"></div>
                <div>
                  <h1 className="text-2xl font-semibold">{marker.place}</h1>
                  <p className="text-gray-300">{marker.title}</p>
                  {marker.popupText}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
