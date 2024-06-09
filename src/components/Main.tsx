import React from "react";
import PatientChart from "../components/PatientChart";
import PatientDetailSummary from "@/components/PatientDetailSummary";
import DiagnosticList from "@/components/DiagnosticList";
import respiratory_rates from "@/assets/respiratory_rate.svg";
import temperature_icon from "@/assets/temperature.svg";
import heart_rate_icon from "@/assets/heart_rate.svg";
import ArrowUp from "@/assets/ArrowUp.svg";
import ArrowDown from "@/assets/ArrowDown.svg";
import { Patient } from "../types/Patient";

interface MainProps {
  selectedPatient: Patient;
  mostRecentDiagnosis: {
    blood_pressure: {
      systolic: { value: number; levels: string };
      diastolic: { value: number; levels: string };
    };
    respiratory_rate: { value: number; levels: string };
    temperature: { value: number; levels: string };
    heart_rate: { value: number; levels: string };
  };
}

const Main: React.FC<MainProps> = ({ selectedPatient, mostRecentDiagnosis }) => {
  return (
    <main className="w-[100%] overflow-auto lg:scrollbar ">
      <section className=" scrollbar flex gap-12 justify-between flex-col py-6 px-3 bg-white rounded-lg ">
        <p className="text-[24px] font-bold">Diagnosis History</p>

        <article className="rounded-md bg-[#F4F0FE] w-full flex flex-col sm:flex-row gap-12 sm:justify-between py-4 px-3">
          <div className="sm:w-[70%] ">
            <header className="flex items-center justify-between mb-3">
              <p>Blood Pressure</p>
              <p>Last 6 months</p>
            </header>
            <div className="w-full h-[20rem]">
            <PatientChart patient={selectedPatient} />
          </div>
          </div>

          <section className="sm:w-[30%] sm:justify-self-end space-y-4">
            <section>
              <p>
                <span className="inline-flex items-center justify-center gap-x-4 border border-solid border-[#E66FD2] rounded-full h-2 w-2 bg-[#E66FD2]"></span>{" "}
                Systolic
              </p>
              <p>{mostRecentDiagnosis.blood_pressure.systolic.value}</p>
              <p>
                <span className="inline-flex items-center justify-center gap-x-4">
                  <img src={ArrowUp} alt="" />
                </span>
                {mostRecentDiagnosis.blood_pressure.systolic.levels}
              </p>
            </section>
            <hr />
            <section>
              <p>
                <span className="inline-flex items-center justify-center gap-x-4 border border-solid border-[#8C6FE6] rounded-full h-2 w-2 bg-[#8C6FE6]"></span>{" "}
                Diastolic
              </p>
              <p>{mostRecentDiagnosis.blood_pressure.diastolic.value}</p>
              <p>
                <span className="inline-flex items-center justify-center gap-4">
                  <img src={ArrowDown} alt="" />
                </span>
                {mostRecentDiagnosis.blood_pressure.diastolic.levels}
              </p>
            </section>
          </section>
        </article>

        <section className="flex gap-3 w-full flex-wrap">
          <PatientDetailSummary
            title="Respiratory Rate"
            value={mostRecentDiagnosis.respiratory_rate.value}
            units="bpm"
            levels={mostRecentDiagnosis.respiratory_rate.levels}
            icon={respiratory_rates}
            className="flex-1"
          />
          <PatientDetailSummary
            title="Temperature"
            value={mostRecentDiagnosis.temperature.value}
            units="F"
            levels={mostRecentDiagnosis.temperature.levels}
            icon={temperature_icon}
            className="flex-1 bg-[#FFE6E9]"
          />
          <PatientDetailSummary
            title="Heart Rate"
            value={mostRecentDiagnosis.heart_rate.value}
            units="bpm"
            levels={mostRecentDiagnosis.heart_rate.levels}
            icon={heart_rate_icon}
            className="flex-1 bg-[#FFE6F1]"
          />
        </section>
      </section>
      <DiagnosticList diagnosticList={selectedPatient.diagnostic_list} />
    </main>
  );
};

export default Main;
