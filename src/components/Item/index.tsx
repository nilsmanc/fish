import { useNavigate } from 'react-router-dom'
import styles from './Item.module.scss'

interface ItemProps {
  data: Array<{}>
}

export const Item: React.FC<ItemProps> = ({ data }) => {
  const navigate = useNavigate()
  return (
    <div>
      {data
        .filter((block: any) => block['Image Gallery'] && block['Species Name'] !== 'Sugar Kelp')
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
            </div>
          )
        })}
    </div>
  )
}
