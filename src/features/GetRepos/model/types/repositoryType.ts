export type RepositoryType = {
    id: number
    name: string
    language: string
    description: string
    stargazers_count: number
}

export type RepositoriesType = {
    repositories: RepositoryType[]
    reposName: string
    loading: boolean
    error: string
}

export type ErrorType = {
    message: string
}

export type ResponseType = RepositoryType & ErrorType
