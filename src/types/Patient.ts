
export interface Diagnosis {
    month: string;
    year: number;
    blood_pressure: {
      systolic: {
        value: number;
        levels: string;
      };
      diastolic: {
        value: number;
        levels: string;
      };
    };
    heart_rate: {
      value: number;
      levels: string;
    };
    respiratory_rate: {
      value: number;
      levels: string;
    };
    temperature: {
      value: number;
      levels: string;
    };
  }
  
  export interface Diagnostic {
    name: string;
    description: string;
    status: string;
  }
  
  export interface Patient {
    name: string;
    gender: string;
    age: number;
    profile_picture: string;
    date_of_birth: string;
    phone_number: string;
    emergency_contact: string;
    insurance_type: string;
    diagnosis_history: Diagnosis[];
    diagnostic_list: Diagnostic[];
    lab_results: string[];
    respiratory_rate: number;
  temperature: number;
  heart_rate: number;
  }
  