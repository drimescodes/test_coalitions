import React from 'react';
import { Line } from 'react-chartjs-2';
import { Patient } from '../types/Patient';
import '../chartSetup';

// Utility function to convert full month names to abbreviations
const getMonthAbbreviation = (month: string) => {
  const monthMap: { [key: string]: string } = {
    January: 'Jan',
    February: 'Feb',
    March: 'Mar',
    April: 'Apr',
    May: 'May',
    June: 'Jun',
    July: 'Jul',
    August: 'Aug',
    September: 'Sep',
    October: 'Oct',
    November: 'Nov',
    December: 'Dec',
  };
  return monthMap[month] || month;
};

// Utility function to get the last 6 months in ascending order
const getLastSixMonths = (diagnosisHistory: Patient['diagnosis_history']) => {
  const sortedHistory = diagnosisHistory.sort((a, b) => {
    const dateA = new Date(`${a.month} 1, ${a.year}`);
    const dateB = new Date(`${b.month} 1, ${b.year}`);
    return dateA.getTime() - dateB.getTime();
  });
  return sortedHistory.slice(-6);
};

interface Props {
  patient: Patient;
}

const PatientChart: React.FC<Props> = ({ patient }) => {
  const lastSixMonths = getLastSixMonths(patient.diagnosis_history);
  const labels = lastSixMonths.map(d => `${getMonthAbbreviation(d.month)} ${d.year}`);
  const systolicData = lastSixMonths.map(d => d.blood_pressure.systolic.value);
  const diastolicData = lastSixMonths.map(d => d.blood_pressure.diastolic.value);


  const data = {
    labels,
    datasets: [
      {
        label: 'Systolic Blood Pressure',
        data: systolicData,
        borderColor: '#C26EB4',
        borderWidth: 2,
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Diastolic Blood Pressure',
        data: diastolicData,
        borderColor: '#7E6CAB',
        borderWidth: 2,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options}/>;
};

export default PatientChart;