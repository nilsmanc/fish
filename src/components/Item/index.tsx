import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../redux/store'

import { fetchFish } from '../../redux/fish/asyncActions'
import { Skeleton } from '../Skeleton/Skeleton'
import { NutrionTable } from '../NutrionTable'
import { Pagination } from '../Pagination'
import { setCurrentPageNumber } from '../../redux/page/slice'
import { selectPage } from '../../redux/page/selectors'
import { isLoadingFish, selectFish } from '../../redux/fish/selectors'

import styles from './Item.module.scss'
import { Button } from '@mui/material'
import { FishType } from '../types'

export const Item: React.FC = () => {
  const data = useSelector(selectFish)
  const loading = useSelector(isLoadingFish)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const page = useSelector(selectPage)
  const [fishPerPage] = useState(6)
  const lastFishIndex = page * fishPerPage
  const firstFishIndex = lastFishIndex - fishPerPage
  const currentFish = data.slice(firstFishIndex, lastFishIndex)

  console.log(currentFish)

  const paginate = (pageNumber: number) => {
    dispatch(setCurrentPageNumber(pageNumber))
  }
  const nextPage = () => dispatch(setCurrentPageNumber(page + 1))
  const prevPage = () => dispatch(setCurrentPageNumber(page - 1))

  const skeletons = [...new Array(3)].map((_, index) => <Skeleton key={index} />)

  const getFish = () => {
    //@ts-ignore
    dispatch(fetchFish())
  }

  const onHandleClick = (item: FishType) => {
    navigate(`/${item['Path'].replace('/profiles/', '')}`)

    window.scrollTo(0, 0)
  }

  useEffect(() => {
    try {
      getFish()
    } catch (err) {
      alert(err)
    }
    dispatch(setCurrentPageNumber(page))
  }, [])

  return (
    <div>
      {loading == 'loading'
        ? skeletons
        : currentFish.map((item: FishType) => {
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
        <Button disabled={page == 1} color='inherit' variant='outlined' onClick={prevPage}>
          Prev Page
        </Button>
        <div className={styles.pages}>
          <Pagination fishPerPage={fishPerPage} totalFish={data.length} paginate={paginate} />
        </div>
        <Button disabled={page == 20} color='inherit' variant='outlined' onClick={nextPage}>
          Next Page
        </Button>
      </div>
    </div>
  )
}
