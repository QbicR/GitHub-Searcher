import React, { memo } from 'react'

interface Props {
    login: string
    avatar: string
}

export const UserInfo: React.FC<Props> = memo((props) => {
    const { login, avatar } = props

    return (
        <div className="flex items-center justify-start w-full max-w-6xl gap-10 px-4 h-20">
            <img className="w-20 h-20 rounded-full shadow-lg " src={avatar} alt="avatar" />
            <h5 className="text-3xl font-medium text-gray-200">{login}</h5>
        </div>
    )
})
