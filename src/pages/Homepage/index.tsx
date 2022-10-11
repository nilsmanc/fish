import { Item } from '../../components/Item'

interface MainPropsType {
  data: Array<{}>
}

export const HomePage: React.FC<MainPropsType> = ({ data }) => {
  return (
    <div>
      <Item data={data} />
    </div>
  )
}
