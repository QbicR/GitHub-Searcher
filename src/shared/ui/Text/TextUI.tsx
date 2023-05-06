import React, { FC } from 'react'

interface Props {
  text: string
}

export const TextUI: FC<Props> = (props) => {
  const { text } = props
  return <div className="text-3xl text-center font-medium text-gray-200">{text}</div>
}
