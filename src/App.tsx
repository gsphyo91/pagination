import { useEffect, useState } from "react";
import * as _ from "lodash";
import Pagination from "./components/Pagination";

export type DataType = {
  id: number;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
};

function App() {
  const [data, setData] = useState<DataType[]>([]);
  const [pages, setPages] = useState<number[]>([]);
  const [tableData, setTableData] = useState<DataType[]>([]);
  const [numberOfRows, setNumberOfRows] = useState<number>(4);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const header = ["h1", "h2", "h3", "h4", "h5"];

  const getData = () => {
    let tmpData = [];
    for (let i = 0; i < 20; i++) {
      tmpData.push({
        id: i + 1,
        h1: `d${i}`,
        h2: `d${i}`,
        h3: `d${i}`,
        h4: `d${i}`,
        h5: `d${i}`,
      });
    }
    setData(tmpData);
  };

  const handleCurrentPage = (page: number) => {
    setTableData(data.slice(numberOfRows * (page - 1), numberOfRows * page));
    setCurrentPage(page);
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setPages(_.range(1, Math.ceil(data.length / numberOfRows) + 1));
  }, [data]);
  useEffect(() => {
    setTableData(data.slice(0, numberOfRows));
  }, [data]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {header.map((h, index) => (
              <th key={index}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((d, index) => (
            <tr key={d.id}>
              <td>{d.h1}</td>
              <td>{d.h2}</td>
              <td>{d.h3}</td>
              <td>{d.h4}</td>
              <td>{d.h5}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
      />
    </div>
  );
}

export default App;
