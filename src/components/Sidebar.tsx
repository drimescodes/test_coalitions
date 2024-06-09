import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Patient } from '../types/Patient';
import more_horiz from '@/assets/more_horiz.svg';

interface Props {
  patients: Patient[];
  onSelectPatient: (name: string) => void;
  selectedPatientName: string | null;
}

const Sidebar: React.FC<Props> = ({ patients, onSelectPatient, selectedPatientName }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsCollapsed(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={sidebarRef} className={`sm:sticky top-[6rem] z-20 bg-white max-h-[100svh] rounded-lg fixed sm:w-64 ${isCollapsed ? 'w-[5rem] fixed ' : 'w-64'} shrink-0 border-r border-gray-200 overflow-y-auto scrollbar transition-width duration-300`}>
      <div className="flex h-16 items-center justify-between px-4">
        <button onClick={handleToggleSidebar} className="sm:hidden">
          {isCollapsed ? '>' : '<'}
        </button>
        {!isCollapsed && <p className="font-semibold">Patients</p>}
      </div>
      <nav className="flex flex-col space-y-1 px-2 py-4">
        {patients.map((patient) => (
          <Link
            key={patient.name}
            to={`/patient/${patient.name}`}
            onClick={() => onSelectPatient(patient.name)}
            className={`flex items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:bg-[#D8FCF7] ${selectedPatientName === patient.name ? 'bg-[#D8FCF7]' : ''}`}
          >
            <section className="flex items-center gap-2">
              <img src={patient.profile_picture} alt={`${patient.name}'s profile`} className="h-8 w-8 rounded-full" />
              {!isCollapsed && (
                <section>
                  <p className="font-medium">{patient.name}</p>
                  <p>{patient.gender}, {patient.age}</p>
                </section>
              )}
            </section>
            {!isCollapsed && <img src={more_horiz} alt="" />}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
