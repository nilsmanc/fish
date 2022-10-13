import ContentLoader from 'react-content-loader'

export const Skeleton = (props: any) => (
  <ContentLoader
    speed={3}
    width={2000}
    height={250}
    viewBox='0 0 2000 265'
    backgroundColor='#485e7a'
    foregroundColor='#27273f'
    {...props}>
    <rect x='0' y='50' rx='30' ry='30' width='1580' height='200'></rect>
  </ContentLoader>
)
