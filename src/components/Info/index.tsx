import { Paper } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
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
  const route = '/' + name
  const getOneFish = async () => {
    dispatch(fetchFish(route))
  }

  useEffect(() => {
    try {
      getOneFish()
    } catch (err) {
      alert(err)
    }
  }, [])

  const cleanText = (propName: string) => {
    return fish[0]?.[propName]?.replace(/<\/?[^>]+(>|$)/g, '').replace(/\&nbsp;/g, ' ')
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
  console.log(fish)

  return (
    <div className={styles.wrapper}>
      {!fish[0] ? (
        <div>Loading...</div>
      ) : (
        <>
          <span className={styles.name}>{fish[0]?.['Species Name']}</span>
          <q className={styles.quote}>{fish[0]?.['Quote']}</q>
          {fish[0]?.['Image Gallery'] ? (
            <Carousel
              className={styles.carousel}
              stopAutoPlayOnHover={true}
              animation='fade'
              duration={1000}
              swipe={false}>
              {items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          ) : (
            <img
              className={styles.illustration}
              src={fish[0]?.['Species Illustration Photo'].src}
            />
          )}

          <div className={styles.biology}>
            <p>
              <b>Biology:</b>
            </p>
            <span>{cleanText('Location')}</span>
            <span>{cleanText('Physical Description')}</span>
          </div>
          <div className={styles.value}>
            <p>
              <b>Nutritional Value:</b>
            </p>
            {fish[0]?.['Health Benefits'] ? <span>{cleanText('Health Benefits')}</span> : ''}
            <span>{cleanText('Taste')}</span>
            <span>{cleanText('Texture')}</span>
          </div>
        </>
      )}
    </div>
  )
}
export const Item = (props: any) => {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
    </Paper>
  )
}
