import { FC, HTMLAttributes } from 'react'
import './styles'

type Props = HTMLAttributes<HTMLSpanElement>

const Tag: FC<Props> = ({ children, className = '', ...props }) => {
  return (
    <span className={`${className} cofi-tag`} {...props}>
      {children}
    </span>
  )
}

export default Tag
