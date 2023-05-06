import { memo } from 'react'
import { useSelector } from 'react-redux'

import { getUserState } from 'entities/Search'
import { UserInfo } from 'entities/UserInfo'
import {
  ReposTable,
  getReposStateData,
  getReposStateError,
  getReposStateLoading,
} from 'features/GetRepos'
import { Loader } from 'shared/ui/Loader/Loader'
import { TextUI } from 'shared/ui/Text/TextUI'
import { Wrapper } from 'shared/ui/Wrapper/Wrapper'

export const ReposWidget = memo(() => {
  const userData = useSelector(getUserState)
  const reposData = useSelector(getReposStateData)
  const reposLoading = useSelector(getReposStateLoading)
  const reposError = useSelector(getReposStateError)
  const { login, avatar_url: avatar, error: userError, loading: userLoading } = userData

  if (userLoading || reposLoading) {
    return (
      <div className="flex items-center justify-center flex-col w-full max-w-6xl h-4/5 p-8 gap-8 border rounded-lg shadow bg-gray-800 border-gray-700">
        <Loader />
      </div>
    )
  }

  if (userError) {
    return (
      <Wrapper>
        <TextUI text={userError} />
      </Wrapper>
    )
  }

  if (reposError) {
    return (
      <Wrapper>
        <TextUI text={reposError} />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <UserInfo login={login} avatar={avatar} />
      {reposData.length === 0 ? (
        <TextUI text={'У пользователя отсутствуют репозитории.'} />
      ) : (
        <ReposTable login={login} repositories={reposData} />
      )}
    </Wrapper>
  )
})
