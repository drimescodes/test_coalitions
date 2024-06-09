import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import LabResults from "@/components/LabResults";
import { getPatientData } from "../services/api";
import { Patient } from "../types/Patient";
import Main from "../components/Main";

const Dashboard: React.FC = () => {
  const { patientName } = useParams<{ patientName: string }>();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  useEffect(() => {
    getPatientData().then((data) => {
      setPatients(data);
      if (patientName) {
        const patient = data.find((p: Patient) => p.name === patientName);
        if (patient) {
          setSelectedPatient(patient);
        }
      }
    });
  }, [patientName]);

  const handleSelectPatient = (name: string) => {
    const patient = patients.find((p: Patient) => p.name === name);
    if (patient) {
      setSelectedPatient(patient);
    }
  };

  const getMostRecentDiagnosis = (patient: Patient) => {
    if (!patient.diagnosis_history || patient.diagnosis_history.length === 0) {
      return {
        blood_pressure: {
          systolic: { value: 0, levels: "N/A" },
          diastolic: { value: 0, levels: "N/A" },
        },
        respiratory_rate: { value: 0, levels: "N/A" },
        temperature: { value: 0, levels: "N/A" },
        heart_rate: { value: 0, levels: "N/A" },
      };
    }

    // Get the most recent diagnosis based on month and year
    const sortedHistory = [...patient.diagnosis_history].sort((a, b) => {
      const dateA = new Date(`${a.month} 1, ${a.year}`);
      const dateB = new Date(`${b.month} 1, ${b.year}`);
      return dateB.getTime() - dateA.getTime();
    });

    return sortedHistory[0];
  };

  const mostRecentDiagnosis = selectedPatient
    ? getMostRecentDiagnosis(selectedPatient)
    : null;

  return (
    <div className="lg:h-screen flex flex-col lg:overflow-hidden relative">
      <Navbar />
      <div className="flex flex-1 sm:flex-row lg:overflow-hidden h-screen sm:w-full ">
        <Sidebar
          patients={patients}
          onSelectPatient={handleSelectPatient}
          selectedPatientName={selectedPatient ? selectedPatient.name : null}
        />
        <section className="flex flex-col lg:flex-row overflow-auto w-full">
          <main className="flex-1 sm:p-4 flex p-2 gap-4 overflow-auto scrollbar">
            {selectedPatient && mostRecentDiagnosis && (
              <Main
                selectedPatient={selectedPatient}
                mostRecentDiagnosis={mostRecentDiagnosis}
              />
            )}
          </main>
          <aside className="lg:w-1/5 lg:overflow-auto scrollbar max-h-screen ">
            {selectedPatient && (
              <section className="bg-white rounded-lg p-6 mb-4 w-[93%] mx-auto">
                <ProfileCard patient={selectedPatient} className="" />
              </section>
            )}
            <section className="bg-white mt-8 rounded-lg p-6 overflow-auto text-[#072635] mb-4 w-[93%] mx-auto">
              <LabResults labResults={selectedPatient?.lab_results || []} />
            </section>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
