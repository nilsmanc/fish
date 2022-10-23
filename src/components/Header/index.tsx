import { Button, Input } from '@mui/material'
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
      <span onClick={handleOnClick} className={styles.title}>
        NOAA FishWatch
      </span>
      <div className={styles.buttons}>
        <span className={styles.fbutton}>Sustainable Seafood</span>
        <span className={styles.fbutton}>About</span>
        <span className={styles.fbutton}>Global</span>
      </div>
      <Input className={styles.search}></Input>
      <Button color='inherit' size='large' className={styles.button}>
        Search
      </Button>
    </div>
  )
}
