import { FC } from 'react'

type Props = {
  title?: string
  value?: string
  icon?: JSX.Element
}

const Card: FC<Props> = (props) => {
  const classPrefix = 'cofi-repurchase-card'
  return (
    <div className={`${classPrefix}`}>
      <span className={`${classPrefix}-title`}>{props.title}</span>
      <span className={`${classPrefix}-value`}>{props.value}</span>
      <span className={`${classPrefix}-icon`}>{props.icon}</span>
    </div>
  )
}

export default Card
