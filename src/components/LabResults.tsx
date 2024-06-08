import download from '@/assets/download.svg';

interface LabResultsProps {
  labResults: string[];
}

const LabResults: React.FC<LabResultsProps> = ({ labResults }) => {
  return (
    <section className='overflow-auto h-[8rem] scrollbar px-4'>
      <p className="font-semibold mb-3">Lab Results</p>
      {labResults.map((result, index) => (
        <section key={index} className="flex justify-between items-center text-[.9rem] mb-2 last:mb-0 hover:bg-[#F6F7F8] p-1">
          <p className="font-light">{result}</p>
          <img src={download} alt="Download" />
        </section>
      ))}
    </section>
  );
};

export default LabResults;
