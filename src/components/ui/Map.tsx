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
  title: string;
  place: string;
};

const markers: MarkerData[] = [
  {
    geocode: [-33.865143, 151.2099],
    popupText:
      "Prabjyot Kaur leverages over 20 years of expertise in financial technologies and SaaS products to deliver cutting edge solutions for the banking and finance sector. Proficient in driving product development from ideation to implementation with rich user experience.She possesses strong leadership skills by leading team of various sized, handling multifunctional team collaboration and maintain strong relationship with key stakeholders.",
    title: "IT Technology Officer",
    place: "Prabjyot Kaur",
  },

  // {
  //   geocode: [7.1907, 125.4553],
  //   popupText: "Xave is a Certified Public Accountant with over four years of experience in financial accounting and reporting, auditing, and process improvement, with a strong focus on enhancing Workday end-user experience. She has a proven track record of identifying bottlenecks in processes and implementing effective solutions to overcome them. Xave is adept at streamlining workflows to increase efficiency and accuracy. In her spare time, she enjoys reading and cooking, which reflects her meticulous attention to detail and creativity both professionally and personally.",
  //   title: "Accounts Officer",
  //   place: "Xave",
  // },
  // {
  //   geocode: [8.1907, 125.4553],
  //   title: "Talent Associate",
  //   popupText: "As a Talent Associate, Anna plays a role in finding and welcoming new talent to our team. She focuses on improving efficiency and accuracy in recruitment and is dedicated to bringing in skilled individuals who align with our company's goals and values, helping us build a strong and diverse team. She enjoys thrifting, and loves to travel which reflects her curiosity for a lot of things.",
  //   place: "Anna",
  // },
];

const Map: React.FC = () => {
  return (
    <div className="sm:w-3/4 w-full">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={1.5}
        scrollWheelZoom={false}
        className="md:h-[80vh] max-md:h-[80vh] rounded-3xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>
              <div className="flex gap-7">
                <div className="bg-projectOrange w-[2rem]"></div>
                <div>
                  <h1 className="text-2xl font-semibold font-montserrat capitalize">
                    {marker.place}
                  </h1>
                  <p className="text-gray-300 font-poppins capitalize">
                    {marker.title}
                  </p>
                  <p className="font-poppins">{marker.popupText}</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        <Marker position={[8.1907, 125.4553]} icon={customIcon}>
          <Popup>
            <div className="flex gap-7">
              <div className="bg-orange-400 w-[2rem]"></div>
              <div>
                <div>
                  <h1 className="text-2xl font-semibold font-montserrat capitalize">
                    {/* Xavierich Castañeda */} Xave Castañeda
                  </h1>
                  <p className="text-gray-300 font-poppins capitalize">
                    Accounts Officer
                  </p>
                  <p className="font-poppins">
                    Xave is a Certified Public Accountant with over four years
                    of experience in financial accounting and reporting,
                    auditing, and process improvement for companies in US,
                    Philippines and Australia. She has a strong focus on
                    enhancing Workday end-user experience.
                  </p>
                </div>

                <div>
                  <h1 className="text-2xl font-semibold font-montserrat capitalize">
                    Anna Luisa Yap
                  </h1>
                  <p className="text-gray-300 font-poppins capitalize">
                    Talent Associate
                  </p>
                  <p className="font-poppins">
                    As a Talent Associate, Anna plays a role in finding and
                    welcoming new talent to our team.
                  </p>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={[40.0583, -74.4057]} icon={customIcon} />
      </MapContainer>
    </div>
  );
};

export default Map;
