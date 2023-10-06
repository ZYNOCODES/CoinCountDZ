import React from "react";

export default function TableHistoryReadOnlyRow({
  Name,
  Date,
  From,
  To,
  Amount,
}) {
  return (
    <div className="TableHistoryReadOnlyRow">
      <tr className="flex item-center gap-1 mb-3">
        <td>
          <span>{Name}</span>
        </td>
        <td>
          <span>{Date}</span>
        </td>
        <td>
          <span>{From}</span>
        </td>
        <td>
          <span>{To}</span>
        </td>
        <td>
          <span>{Amount} DZA</span>
        </td>
      </tr>
    </div>
  );
}
