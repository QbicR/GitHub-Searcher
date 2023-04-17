import { UserType } from 'entities/Search'
import { CommitesType } from 'features/GetCommits'
import { RepositoriesType } from 'features/GetRepos'

export interface StateSchema {
    userData: UserType
    reposData: RepositoriesType
    commitesData: CommitesType
}
