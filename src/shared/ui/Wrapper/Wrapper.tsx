import React, { FC } from 'react'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

export const Wrapper: FC<Props> = (props) => {
  const { children } = props
  return (
    <div className="flex items-center justify-start flex-col w-full max-w-6xl h-4/5 p-8 gap-8 border rounded-lg shadow bg-gray-800 border-gray-700">
      {children}
    </div>
  )
}
