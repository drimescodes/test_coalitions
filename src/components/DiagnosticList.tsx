import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DiagnosticListProps {
  diagnosticList: Array<{
    name: string;
    description: string;
    status: string;
  }>;
}

const DiagnosticList: React.FC<DiagnosticListProps> = ({ diagnosticList }) => {
  return (
    <section className="bg-white lg::h-[15rem] scrollbar mt-8 rounded-lg sm:p-6 lg:overflow-y-auto text-[#072635]">
      <Table className="table-fixed w-full ">
        <TableHeader className="">
          <TableRow className="border-none bg-[#F6F7F8] text-[#072635] font-bold">
            <TableHead className="rounded-l-full text-[#072635] font-bold w-1/3 ">Problem <span className="block sm:inline">/Diagnosis</span> </TableHead>
            <TableHead className="text-[#072635] font-bold w-1/3">Description</TableHead>
            <TableHead className="rounded-r-full text-[#072635] font-bold w-1/3">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {diagnosticList.map((diagnosis, index) => (
            <TableRow key={index} className="border-none">
              <TableCell className="break-words">{diagnosis.name}</TableCell>
              <TableCell className="break-words">{diagnosis.description}</TableCell>
              <TableCell className="break-words">{diagnosis.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default DiagnosticList;
