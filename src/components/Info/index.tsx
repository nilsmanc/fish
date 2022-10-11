import styles from './Info.module.scss'

interface InfoProps {
  fish: Array<any>
}

export const Info: React.FC<InfoProps> = ({ fish }) => {
  const cleanText = (propName: string) => {
    return fish[0]?.[propName].replace(/<\/?[^>]+(>|$)/g, '')
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <img className={styles.image} src={fish[0]?.['Image Gallery']?.[0]?.src} />
      </div>
      <span className={styles.population}>{fish[0]?.Population}</span>
      <span className={styles.quote}>{fish[0]?.Quote}</span>
      <span className={styles.rate}>{fish[0]?.['Fishing Rate']}</span>
      <span className={styles.habitat}>{fish[0]?.['Habitat Impacts']}</span>
      <span className={styles.biology}>{cleanText('Biology')}</span>
      <div>
        <img className={styles.image} src={fish[0]?.['Species Illustration Photo']?.src} />
      </div>
    </div>
  )
}
