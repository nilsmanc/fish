import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Info } from '../../components/Info'

export const Details: React.FC = () => {
  const { name } = useParams()

  const [fish, setFish] = useState([] as Array<{}>)

  useEffect(() => {
    const options = {
      method: 'GET',
    }
    fetch(`https://www.fishwatch.gov/api/species/${name}`, options)
      .then((response) => response.json())
      .then((response) => setFish(response))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <Info fish={fish} />
    </div>
  )
}
