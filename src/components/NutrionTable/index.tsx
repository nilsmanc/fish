import { FishType } from '../types'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

interface NutrionTableProps {
  fish: FishType
}
const columns: GridColDef[] = [
  { field: 'calories', headerName: 'Calories', width: 150 },
  {
    field: 'protein',
    headerName: 'Protein',
    width: 150,
  },
  { field: 'fat', headerName: 'Fat', width: 150 },
  {
    field: 'cholesterol',
    headerName: 'Cholesterol',
    width: 150,
  },
  {
    field: 'sodium',
    headerName: 'Sodium',
    width: 145,
  },
]

export const NutrionTable: React.FC<NutrionTableProps> = ({ fish }) => {
  const rows = [
    {
      id: 1,
      calories: fish['Calories'],
      protein: fish['Protein'],
      fat: fish['Fat, Total'],
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
        autoHeight
      />
    </div>
  )
}
