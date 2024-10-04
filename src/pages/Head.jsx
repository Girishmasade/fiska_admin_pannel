import React from "react";
import { head } from "../utils/HeadData";

function Head() {
  return (
    <div className="flex ">
        {head.map((idx) => (
      <table key={idx.id} className="w-full border">
          <tr>
            <th className="p-3 bg-gray-100">{idx.th}</th>
          </tr>
      </table>
        ))}
    </div>
  );
}

export default Head;
