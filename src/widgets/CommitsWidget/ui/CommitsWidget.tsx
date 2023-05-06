import { useSelector } from 'react-redux'

import { CommitInfo } from 'entities/CommitInfo'
import {
  CommitsTable,
  getCommitesStateData,
  getCommitesStateError,
  getCommitesStateLoading,
} from 'features/GetCommits'
import { Loader } from 'shared/ui/Loader/Loader'
import { getReposStateReposName } from 'features/GetRepos'
import { TextUI } from 'shared/ui/Text/TextUI'
import { Wrapper } from 'shared/ui/Wrapper/Wrapper'

export const CommitsWidget = () => {
  const commites = useSelector(getCommitesStateData)
  const loading = useSelector(getCommitesStateLoading)
  const error = useSelector(getCommitesStateError)
  const reposName = useSelector(getReposStateReposName)

  if (loading) {
    return (
      <Wrapper>
        <CommitInfo reposName={reposName} />
        <Loader />
      </Wrapper>
    )
  } else if (error) {
    return (
      <Wrapper>
        <CommitInfo reposName={reposName} />
        <TextUI text={error} />
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <CommitInfo reposName={reposName} />
        <CommitsTable commites={commites} />
      </Wrapper>
    )
  }
}
