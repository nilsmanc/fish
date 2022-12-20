import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../redux/store'

import { fetchFish } from '../../redux/fish/asyncActions'
import { NutrionTable } from '../../components/NutrionTable'
import { Pagination } from '../../components/Pagination'
import { setCurrentPageNumber } from '../../redux/page/slice'
import { selectPage } from '../../redux/page/selectors'
import { isLoadingFish, selectFish } from '../../redux/fish/selectors'

import styles from './List.module.scss'
import { Button } from '@mui/material'
import { FishType } from '../../components/types'
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material'

export const List: React.FC = () => {
  const data = useSelector(selectFish)
  const loading = useSelector(isLoadingFish)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const page = useSelector(selectPage)
  const [fishPerPage] = useState(6)
  const lastFishIndex = page * fishPerPage
  const firstFishIndex = lastFishIndex - fishPerPage
  const currentFish = data.slice(firstFishIndex, lastFishIndex)

  const paginate = (pageNumber: number) => {
    dispatch(setCurrentPageNumber(pageNumber))
  }
  const nextPage = () => dispatch(setCurrentPageNumber(page + 1))
  const prevPage = () => dispatch(setCurrentPageNumber(page - 1))

  const skeletons = [...new Array(3)].map((_, index) => (
    <div key={index} className={styles.skeleton} />
  ))

  const getFish = () => {
    dispatch(fetchFish(''))
  }

  const onHandleClick = (item: FishType) => {
    navigate(`/${item['Path'].replace('/profiles/', '')}`)

    window.scrollTo(0, 0)
  }

  useEffect(() => {
    getFish()
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
        <div className={styles.pages}>
          <Pagination
            fishPerPage={fishPerPage}
            totalFish={data.length}
            paginate={paginate}
            page={page}
          />
        </div>
        <div className={styles.turn}>
          <Button
            className={styles.prev}
            disabled={page == 1}
            color='inherit'
            variant='text'
            onClick={prevPage}>
            <ArrowBackIos />
          </Button>
          <Button disabled={page == 20} color='inherit' variant='text' onClick={nextPage}>
            <ArrowForwardIos />
          </Button>
        </div>
      </div>
    </div>
  )
}
