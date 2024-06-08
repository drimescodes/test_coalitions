import { Patient } from "../types/Patient";
import calendar from "@/assets/calendar.svg";
import female from "@/assets/FemaleIcon.svg";
import phone from "@/assets/PhoneIcon.svg";
import insurance from "@/assets/InsuranceIcon.svg";

interface Props {
  patient: Patient;
  className?: string;
}

const ProfileCard: React.FC<Props> = ({ patient, className }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={`inline-flex items-center justify-center flex-col ${className}`}>
      <img src={patient.profile_picture} alt={`Profile picture of ${patient.name}`} className="mb-4" />
      <h2 className="font-semibold mb-6">{patient.name}</h2>

      <section className="flex flex-col items-start space-y-6 text-[.8rem] w-full">
        <section className="grid grid-cols-[auto_1fr] gap-3 w-full items-center">
          <img src={calendar} alt="Calendar icon" />
          <div>
            <p className="font-light">
              Date of Birth
              <span className="block font-medium">{formatDate(patient.date_of_birth)}</span>
            </p>
          </div>
        </section>

        <section className="grid grid-cols-[auto_1fr] gap-3 w-full items-center">
          <img src={female} alt="Gender icon" />
          <div>
            <p className="font-light">
              Gender
              <span className="block font-medium">{patient.gender}</span>
            </p>
          </div>
        </section>

        <section className="grid grid-cols-[auto_1fr] gap-3 w-full items-center">
          <img src={phone} alt="Phone icon" />
          <div>
            <p className="font-light">
              Contact info
              <span className="block font-medium">{patient.phone_number}</span>
            </p>
          </div>
        </section>

        <section className="grid grid-cols-[auto_1fr] gap-3 w-full items-center">
          <img src={phone} alt="Emergency contact icon" />
          <div>
            <p className="font-light">
              Emergency contact
              <span className="block font-medium">{patient.emergency_contact}</span>
            </p>
          </div>
        </section>

        <section className="grid grid-cols-[auto_1fr] gap-3 w-full items-center">
          <img src={insurance} alt="Insurance provider icon" />
          <div>
            <p className="font-light">
              Insurance Provider
              <span className="block font-medium">{patient.insurance_type}</span>
            </p>
          </div>
        </section>

        <button className="bg-[#01F0D0] rounded-full py-3 px-6 ml-6 self-center mt-4">
          Show All Information
        </button>
      </section>
    </div>
  );
};

export default ProfileCard;
