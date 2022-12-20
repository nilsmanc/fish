import { Button } from '@mui/material'

type PaginationProps = {
  fishPerPage: number
  totalFish: number
  paginate: (number: number) => void
  page: number
}

export const Pagination: React.FC<PaginationProps> = ({
  fishPerPage,
  totalFish,
  paginate,
  page,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalFish / fishPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      {pageNumbers.map((number) =>
        +page === +number ? (
          <Button
            key={number}
            color='primary'
            variant='contained'
            size='large'
            onClick={() => paginate(number)}>
            {number}
          </Button>
        ) : (
          <Button
            key={number}
            color='inherit'
            variant='text'
            size='large'
            onClick={() => paginate(number)}>
            {number}
          </Button>
        ),
      )}
    </>
  )
}
