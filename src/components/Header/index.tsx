import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'

export const Header: React.FC = () => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate('/')
  }
  return (
    <div className={styles.wrapper}>
      <div onClick={handleOnClick}>
        <img className={styles.image} alt='logo' src='logo.png' />
      </div>
      <input className={styles.search}></input>
      <button className={styles.button}>Search</button>
    </div>
  )
}
