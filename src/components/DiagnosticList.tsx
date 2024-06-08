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
    <section className="bg-white h-[15rem] scrollbar mt-8 rounded-lg p-6 overflow-auto text-[#072635]">
      <Table>
        <TableHeader className=" ">
          <TableRow className="border-none bg-[#F6F7F8] text-[#072635] font-bold">
            <TableHead className="rounded-l-full text-[#072635] font-bold">Problem/Diagnosis</TableHead>
            <TableHead className="text-[#072635] font-bold">Description</TableHead>
            <TableHead className="rounded-r-full text-[#072635] font-bold">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {diagnosticList.map((diagnosis, index) => (
            <TableRow key={index} className="border-none">
              <TableCell>{diagnosis.name}</TableCell>
              <TableCell>{diagnosis.description}</TableCell>
              <TableCell>{diagnosis.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default DiagnosticList;
