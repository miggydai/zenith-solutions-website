import React from "react";

interface props {
  header: string;
}
const SectionHeader: React.FC<props> = ({ header }) => {
  return (
    <h2 className="text-4xl text-center font-bold text-aquaBlue">{header}</h2>
  );
};

export default SectionHeader;
