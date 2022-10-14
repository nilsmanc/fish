import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { isLoadingFish, selectFish } from '../../redux/fish/selectors'
import styles from './Item.module.scss'
import { useEffect } from 'react'
import { useAppDispatch } from '../../redux/store'
import { fetchFish } from '../../redux/fish/asyncActions'
import { Skeleton } from './Skeleton'
import { NutrionTable } from '../NutrionTable'

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
  return (
    <div>
      {loading == 'loading'
        ? skeletons
        : data
            .filter(
              (block: any) => block['Image Gallery'] && block['Species Name'] !== 'Sugar Kelp',
            )
            .map((item: any) => {
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
    </div>
  )
}
