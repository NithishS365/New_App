export interface MedicalHistory {
    condition: string;
    diagnosedDate: string;
    medications: string[];
    doctor: Doctor;
  }
  
  export interface Doctor {
    name: string;
    contact: string;
    hospital: string;
  }