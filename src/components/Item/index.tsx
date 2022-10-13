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
                  onClick={() => navigate(`/${item['Path'].replace('/profiles/', '')}`)}
                  className={styles.wrapper}
                  key={item['Biology']}>
                  <img className={styles.image} src={item['Species Illustration Photo']?.src} />
                  <div className={styles.name}>
                    <b>Name:</b> <span>{item['Species Name']}</span>
                  </div>
                  <div className={styles.region}>
                    <b>Region:</b> <span>{item['NOAA Fisheries Region']}</span>
                  </div>
                  <div className={styles.calories}>
                    <b>Calories:</b> <span>{item['Calories']}</span>
                  </div>
                  <div className={styles.sugars}>
                    <b>Sugars:</b>
                    <span>{item['Sugars, Total']}</span>
                  </div>
                  <div className={styles.protein}>
                    <b>Protein: </b>
                    <span>{item['Protein']}</span>
                  </div>
                  <div className={styles.fat}>
                    <b> Fat:</b> <span>{item['Fat, Total']}</span>
                  </div>
                  <NutrionTable fish={item} />
                </div>
              )
            })}
    </div>
  )
}
