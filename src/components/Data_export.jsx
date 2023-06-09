import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Paper from "@mui/material/Paper";

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function Data_export() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  const [filterModel, setFilterModel] = React.useState({
    items: [
      {
        field: 'rating',
        operator: '>',
        value: '2.5',
      },
    ],
  });

  return (
    <Paper>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        slots={{
          toolbar: GridToolbar,
        }}
        filterModel={filterModel}
        onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
      />
    </div>
    </Paper>
  );
}