import { DataGrid, GridColDef } from '@mui/x-data-grid'

interface NutrionTableProps {
  fish: any
}
const columns: GridColDef[] = [
  { field: 'calories', headerName: 'Calories', width: 110 },
  {
    field: 'protein',
    headerName: 'Protein',
    width: 110,
  },
  { field: 'fat', headerName: 'Fat', width: 110 },
  {
    field: 'sugars',
    headerName: 'Sugars',
    width: 110,
  },
  {
    field: 'cholesterol',
    headerName: 'Cholesterol',
    width: 110,
  },
  {
    field: 'sodium',
    headerName: 'Sodium',
    width: 110,
  },
]

export const NutrionTable: React.FC<NutrionTableProps> = ({ fish }) => {
  const rows = [
    {
      id: 1,
      calories: fish['Calories'],
      protein: fish['Protein'],
      fat: fish['Fat, Total'],
      sugars: fish['Sugars, Total'],
      cholesterol: fish['Cholesterol'],
      sodium: fish['Sodium'],
    },
  ]

  return (
    <div style={{ height: 110 }}>
      <DataGrid
        disableColumnFilter={true}
        disableColumnMenu={true}
        disableColumnSelector={true}
        disableDensitySelector={true}
        disableIgnoreModificationsIfProcessingProps={true}
        disableSelectionOnClick={true}
        disableVirtualization={true}
        hideFooter={true}
        rows={rows}
        columns={columns}
      />
    </div>
  )
}
