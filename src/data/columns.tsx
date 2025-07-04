import type { Column, CellProps } from 'react-table';

export interface JobRow {
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  value: string;
}

const rowNumberColumn: Column<JobRow> = {
  id: 'rowNumber',
  Header: '#',
  width: 50,
  Cell: ({ row }: CellProps<JobRow>) => row.index + 1,
};

export const columns: Column<JobRow>[] = [
  rowNumberColumn,
  {
    Header: 'Job Request',
    accessor: 'jobRequest',
    minWidth: 150,
    width: 200,
  },
  {
    Header: 'Submitted',
    accessor: 'submitted',
    width: 120,
  },
  {
    Header: 'Status',
    accessor: 'status',
    width: 120,
    Cell: ({ value }) =>
      value ? (
        <span
          className={`px-2 py-1 text-xs rounded text-white ${
            value === 'Complete'
              ? 'bg-green-600'
              : value === 'In progress'
              ? 'bg-yellow-500'
              : value === 'Blocked'
              ? 'bg-red-600'
              : 'bg-gray-500'
          }`}
        >
          {value}
        </span>
      ) : null,
  },
  {
    Header: 'Submitter',
    accessor: 'submitter',
    width: 150,
  },
  {
    Header: 'URL',
    accessor: 'url',
    width: 180,
  },
  {
    Header: 'Assigned',
    accessor: 'assigned',
    width: 150,
  },
  {
    Header: 'Priority',
    accessor: 'priority',
    width: 100,
    Cell: ({ value }) =>
      value ? (
        <span
          className={`text-xs font-medium ${
            value === 'High'
              ? 'text-red-600'
              : value === 'Medium'
              ? 'text-orange-500'
              : 'text-blue-500'
          }`}
        >
          {value}
        </span>
      ) : null,
  },
  {
    Header: 'Due Date',
    accessor: 'dueDate',
    width: 120,
  },
  {
    Header: 'Est. Value',
    accessor: 'value',
    width: 120,
  },
];
