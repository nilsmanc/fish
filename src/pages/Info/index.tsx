import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import Carousel from 'react-material-ui-carousel'

import { fetchFish } from '../../redux/fish/asyncActions'
import { selectFish } from '../../redux/fish/selectors'
import { ImageType } from '../../components/types'

import styles from './Info.module.scss'
import { Paper } from '@mui/material'

export const Info: React.FC = () => {
  const dispatch = useAppDispatch()
  const fish = useSelector(selectFish)
  const fishItem = fish[0]

  const { name } = useParams()
  const route = '/' + name

  const getOneFish = () => {
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
    return fishItem?.[propName]?.replace(/<\/?[^>]+(>|$)/g, '').replace(/\&nbsp;/g, ' ')
  }

  const images = fishItem?.['Image Gallery']

  const items = images?.map((image: ImageType) => ({
    name: <img className={styles.image} src={image.src} alt={image.alt} />,
  }))

  return (
    <div className={styles.wrapper}>
      {!fishItem ? (
        <div>Loading...</div>
      ) : (
        <>
          <span className={styles.name}>{fishItem?.['Species Name']}</span>
          <q className={styles.quote}>{fishItem?.['Quote']}</q>
          {fishItem?.['Image Gallery'] ? (
            <Carousel
              className={styles.carousel}
              stopAutoPlayOnHover={true}
              animation='fade'
              duration={1000}
              swipe={false}>
              {items.map((item: React.ReactNode, i: number) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          ) : (
            <img
              className={styles.illustration}
              src={fishItem?.['Species Illustration Photo'].src}
            />
          )}
          <div className={styles.biology}>
            <p>
              <b>Biology:</b>
            </p>
            <span>{cleanText('Physical Description')}</span>
          </div>
          <div className={styles.value}>
            <p>
              <b>Nutritional Value:</b>
            </p>
            {fishItem?.['Health Benefits'] ? <span>{cleanText('Health Benefits')}</span> : ''}
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
