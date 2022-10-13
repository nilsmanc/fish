import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

interface NutrionTableProps {
  fish: any
}

export const NutrionTable: React.FC<NutrionTableProps> = ({ fish }) => {
  const createData = (calories: string, fat: string, sugars: string, protein: string) => {
    return { calories, fat, sugars, protein }
  }

  const rows = [
    createData(fish['Calories'], fish['Fat, Total'], fish['Sugars, Total'], fish['Protein']),
  ]
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='right'>Calories</TableCell>
            <TableCell align='right'>Fat&nbsp;(g)</TableCell>
            <TableCell align='right'>Sugars&nbsp;(g)</TableCell>
            <TableCell align='right'>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align='right'>{row.calories}</TableCell>
              <TableCell align='right'>{row.fat}</TableCell>
              <TableCell align='right'>{row.sugars}</TableCell>
              <TableCell align='right'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
