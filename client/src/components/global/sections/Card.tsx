import React from 'react'

type Props = {
    iconName: string,
    title: string,
    description: string,
}

const Card = (props: Props) => {
  return (
    <div>{props.title}</div>
  )
}

export default Card