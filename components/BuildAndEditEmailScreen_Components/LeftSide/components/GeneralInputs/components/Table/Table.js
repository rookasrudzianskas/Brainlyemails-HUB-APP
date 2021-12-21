import React from 'react';
import TableRowsIcon from '@mui/icons-material/TableRows';

const Table = () => {
    return (
        <div className="px-6 py-3 flex flex-row space-x-2 text-indigo-200 hover:bg-indigo-200 hover:text-indigo-500 cursor-pointer transition duration-150 ease-in-out">
            <TableRowsIcon />
            <p>Table</p>
        </div>
    );
};

export default Table;
