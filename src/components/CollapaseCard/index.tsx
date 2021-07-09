import { FC, useState } from 'react'
import './styles'
import { ArrowDownOutline } from 'src/components/Icon'
import classNames from 'classnames'

type Props = {
  title?: string
}

const CollapseCard: FC<Props> = ({ children, ...props }) => {
  const classPrefix = 'cofi-collapse-card'
  const [collapse, setCollapse] = useState(true)

  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}-header`} onClick={() => setCollapse(!collapse)}>
        <div className={`${classPrefix}-title`}>{props.title}</div>
        <ArrowDownOutline
          className={classNames({
            [`${classPrefix}-arrow`]: true,
            flip: !collapse,
          })}
        />
      </div>

      {!collapse && <div className={`${classPrefix}-content`}>{children}</div>}
    </div>
  )
}

export default CollapseCard
