import { Paper } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { NutrionTable } from '../NutrionTable'
import styles from './Info.module.scss'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch } from '../../redux/store'
import { fetchFish } from '../../redux/fish/asyncActions'
import { useSelector } from 'react-redux'
import { selectFish } from '../../redux/fish/selectors'

export const Info: React.FC = () => {
  const dispatch = useAppDispatch()
  const { name } = useParams()
  const fish = useSelector(selectFish)
  console.log(fish[0])
  const route = '/' + name
  const getOneFish = async () => {
    dispatch(fetchFish(route))
  }

  useEffect(() => {
    getOneFish()
  }, [])

  const cleanText = (propName: string) => {
    return fish[0]?.[propName].replace(/<\/?[^>]+(>|$)/g, '')
  }
  let photos = [
    <img className={styles.image} src={fish[0]?.['Image Gallery']?.[0]?.src} />,
    <img className={styles.image} src={fish[0]?.['Image Gallery']?.[1]?.src} />,
    <img className={styles.image} src={fish[0]?.['Image Gallery']?.[2]?.src} />,
    <img className={styles.image} src={fish[0]?.['Image Gallery']?.[3]?.src} />,
  ]
  let items = [
    {
      name: photos[0],
    },
    {
      name: photos[1],
    },
    {
      name: photos[2],
    },
    {
      name: photos[3],
    },
  ]

  return (
    <div className={styles.wrapper}>
      <span className={styles.name}>{fish[0]?.['Species Name']}</span>
      <q className={styles.quote}>{fish[0]?.['Quote']}</q>
      <Carousel stopAutoPlayOnHover={true} animation='slide' duration={1000} swipe={false}>
        {items.map((item, i) => (
          <TestItem key={i} item={item} />
        ))}
      </Carousel>
      {/* <NutrionTable fish={fish[0]} /> */}
      <div className={styles.text}>
        <p>
          <b>Biology:</b>
        </p>
        <span>{cleanText('Location')}</span>
        <span>{cleanText('Physical Description')}</span>
        <span>{cleanText('Biology')}</span>
      </div>
      <div className={styles.nutrion}>
        <p>
          <b>Nutritional Value:</b>
        </p>
        <span>{cleanText('Health Benefits')}</span>
        <span>{cleanText('Taste')}</span>
        <span>{cleanText('Texture')}</span>
      </div>
    </div>
  )
}
export const TestItem = (props: any) => {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
    </Paper>
  )
}
