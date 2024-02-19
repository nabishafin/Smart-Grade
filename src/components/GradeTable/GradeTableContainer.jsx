import React from "react";
import SearchBox from "./SearchBox";
import classInfo from "../../../db.json";
import TableRow from "./TableRow";

const GradeTableContainer = () => {
  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <SearchBox />
        <div className="max-w-[848px] mx-auto overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#FFFFFF0D]">
                <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                  ID
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold text-left">
                  Name
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                <th className="p-5 text-sm md:text-xl font-semibold">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody>
              {classInfo?.map((classDetails, index) => (
                <TableRow classDetails={classDetails} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default GradeTableContainer;
