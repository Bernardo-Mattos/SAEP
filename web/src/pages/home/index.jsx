import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import data from '../../database/db.json';

const columns = [
 { field: 'professor_id', headerName: 'Professor ID', width: 130 },
 { field: 'nome', headerName: 'Nome', width: 130 },
];

export default function Home() {
 return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
 );
}