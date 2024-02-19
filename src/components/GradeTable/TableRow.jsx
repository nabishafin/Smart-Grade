import React from "react";
import img from "../../assets/avatar.png";

const TableRow = ({ classDetails }) => {
  const { classNumber, students } = classDetails || {};
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          Class {classNumber}
        </td>
      </tr>
      {students?.map((student, index) => (
        <tr className="border-b border-[#7ECEB529]" key={index}>
          <td className="p-5 text-sm md:text-xl">{index + 1}</td>
          <td className="p-5 text-sm md:text-xl">
            <div className="flex space-x-3 items-center">
              <img
                className="w-8 h-8"
                src={img}
                width="32"
                height="32"
                alt="John Smith"
              />
              <span className="whitespace-nowrap">{student?.name}</span>
            </div>
          </td>
          <td className="p-5 text-sm md:text-xl text-center">
            {student?.score}
          </td>
          <td className="p-5 text-sm md:text-xl text-center">
            {student?.percentage}%
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
