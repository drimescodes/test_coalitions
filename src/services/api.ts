import axios from "axios";
import { Patient } from "../types/Patient";

const API_URL =
  "https://fedskillstest.coalitiontechnologies.workers.dev/patient";
const username = "coalition";
const password = "skills-test";
const credentials = btoa(`${username}:${password}`);

export const getPatientData = async (): Promise<Patient[]> => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Basic ${credentials}` },
  });
  return response.data;
};
