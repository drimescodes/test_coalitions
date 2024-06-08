import React from "react";

interface Props {
  title: string;
  value: number | string;
  units: string;
  levels: string;
  icon: string;
  className?: string;
}

const PatientDetailSummary: React.FC<Props> = ({ title, value, units, levels, icon, className }) => {
  return (
    <section className={`bg-[#E0F3FA] rounded-lg p-6 ${className}`} aria-labelledby={`${title}-title`}>
      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-2">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <p id={`${title}-title`} className="font-semibold text-lg mb-1">{title}</p>
      <p className="font-extrabold text-2xl mb-2">
        {value} <span className="font-normal text-lg">{units}</span>
      </p>
      <p className="text-sm text-gray-600">{levels}</p>
    </section>
  );
};

export default PatientDetailSummary;
