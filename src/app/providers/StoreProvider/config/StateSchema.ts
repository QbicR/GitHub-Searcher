import { AxiosInstance } from 'axios'
import { UserType } from 'entities/Search'
import { CommitesType } from 'features/GetCommits'
import { RepositoriesType } from 'features/GetRepos'

export interface StateSchema {
    userData: UserType
    reposData: RepositoriesType
    commitesData: CommitesType
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
