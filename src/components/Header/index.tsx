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
      <span className={styles.title}>NOAA FishWatch</span>
      <Input className={styles.search}></Input>
      <Button size='large' className={styles.button}>
        Search
      </Button>
    </div>
  )
}
