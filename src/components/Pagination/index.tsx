import { Button } from '@mui/material'

type PaginationProps = {
  fishPerPage: number
  totalFish: number
  paginate: (number: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({ fishPerPage, totalFish, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalFish / fishPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      {pageNumbers.map((number) => (
        <Button
          key={number}
          color='inherit'
          variant='text'
          size='large'
          onClick={() => paginate(number)}>
          {number}
        </Button>
      ))}
    </div>
  )
}
