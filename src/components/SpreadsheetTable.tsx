import {
  useTable,
  useResizeColumns,
  useColumnOrder,
  useBlockLayout,
} from 'react-table';
import { columns } from '../data/columns';
import { mockData } from '../data/mockData';
import { useEffect, useState } from 'react';

export default function SpreadsheetTable() {
  const [activeCell, setActiveCell] = useState<{ row: number; col: number } | null>(null);
  const [tableData, setTableData] = useState([...mockData]);

  // Ensure at least 20 rows are visible
  useEffect(() => {
    if (tableData.length < 20) {
      const emptyRows = Array.from({ length: 20 - tableData.length }, () => ({}));
      setTableData((prev) => [...prev, ...emptyRows]);
    }
  }, [tableData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
  } = useTable(
    {
      columns,
      data: tableData,
      defaultColumn: { minWidth: 100, width: 150, maxWidth: 400 },
    },
    useColumnOrder,
    useBlockLayout,
    useResizeColumns
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!activeCell) return;
    let { row, col } = activeCell;
    if (e.key === 'ArrowDown') row = Math.min(rows.length - 1, row + 1);
    if (e.key === 'ArrowUp') row = Math.max(0, row - 1);
    if (e.key === 'ArrowRight') col = Math.min(rows[0].cells.length - 1, col + 1);
    if (e.key === 'ArrowLeft') col = Math.max(0, col - 1);
    setActiveCell({ row, col });
  };

  const handleCellEdit = (rowIndex: number) => {
    if (rowIndex === tableData.length - 1) {
      setTableData((prev) => [...prev, {}]);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow border border-gray-300 overflow-auto">
      <div className="mb-3">
        <button
          className="mr-2 px-3 py-1 border rounded bg-blue-100 text-sm"
          onClick={() => console.log('Add row')}
        >
          + Add Row
        </button>
        {allColumns.map((column) => (
          <label key={column.id} className="mr-3 text-sm">
            <input
              type="checkbox"
              {...column.getToggleHiddenProps()}
              className="mr-1"
            />
            {column.headerLabel || (typeof column.Header === 'string' ? column.Header : column.id)}
          </label>
        ))}
      </div>

      <div
        className="overflow-auto"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <table
          {...getTableProps()}
          className="table-auto text-sm text-left min-w-full border-separate border-spacing-0"
          // style={{ tableLayout: 'fixed' }} // Remove/comment this for natural wrapping
        >
          <thead className="text-xs text-gray-600 uppercase">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100">
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="p-2 border-b border-r font-semibold relative bg-gray-100 whitespace-normal break-words"
                  >
                    {column.render('Header')}
                    {column.canResize && (
                      <div
                        {...column.getResizerProps()}
                        className="absolute top-0 right-0 w-1 h-full cursor-col-resize bg-gray-300"
                      />
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="border-t hover:bg-gray-50">
                  {row.cells.map((cell, colIndex) => {
                    const isFocused = activeCell?.row === rowIndex && activeCell?.col === colIndex;
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={`p-2 border-r whitespace-normal break-words ${
                          isFocused ? 'outline outline-blue-500' : ''
                        }`}
                        onClick={() => {
                          setActiveCell({ row: rowIndex, col: colIndex });
                          handleCellEdit(rowIndex);
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
