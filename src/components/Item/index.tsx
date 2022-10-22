import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { isLoadingFish, selectFish } from '../../redux/fish/selectors'
import styles from './Item.module.scss'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../redux/store'
import { fetchFish } from '../../redux/fish/asyncActions'
import { Skeleton } from './Skeleton'
import { NutrionTable } from '../NutrionTable'
import { Pagination } from '../Pagination'
import { Button } from '@mui/material'

export const Item: React.FC = () => {
  const navigate = useNavigate()

  const data = useSelector(selectFish)
  const loading = useSelector(isLoadingFish)
  const dispatch = useAppDispatch()
  const getFish = async () => {
    //@ts-ignore
    dispatch(fetchFish())
  }

  const onHandleClick = (item: any) => {
    navigate(`/${item['Path'].replace('/profiles/', '')}`)

    window.scrollTo(0, 0)
  }
  const skeletons = [...new Array(3)].map((_, index) => <Skeleton key={index} />)

  useEffect(() => {
    getFish()
  }, [])

  const [currentPage, setCurrentPage] = useState(1)
  const [fishPerPage] = useState(6)

  const lastFishIndex = currentPage * fishPerPage
  const firstFishIndex = lastFishIndex - fishPerPage
  const currentFish = data.slice(firstFishIndex, lastFishIndex)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage((prev) => prev + 1)
  const prevPage = () => setCurrentPage((prev) => prev - 1)

  return (
    <div>
      {loading == 'loading'
        ? skeletons
        : currentFish.map((item: any) => {
            return (
              <div
                onClick={() => onHandleClick(item)}
                className={styles.wrapper}
                key={item['Biology']}>
                <img className={styles.image} src={item['Species Illustration Photo']?.src} />
                <div className={styles.name}>
                  <span>{item['Species Name']}</span>
                </div>

                <div className={styles.table}>
                  <NutrionTable fish={item} />
                </div>
              </div>
            )
          })}
      <div className={styles.paginator}>
        {currentPage !== 1 && (
          <Button variant='contained' onClick={prevPage}>
            Prev Page
          </Button>
        )}
        <div className={styles.pages}>
          <Pagination fishPerPage={fishPerPage} totalFish={data.length} paginate={paginate} />
        </div>
        {currentPage !== 20 && (
          <Button variant='contained' onClick={nextPage}>
            Next Page
          </Button>
        )}
      </div>
    </div>
  )
}
