export type AuthorType = {
    author: {
        name: string
        date: string
    }
}

export type CommitType = {
    sha: string
    commit: AuthorType
}

export type CommitesType = {
    commites: CommitType[]
    loading: boolean
    error: string
}

export type ErrorType = {
    message: string
}

export type ResponseType = CommitType & ErrorType
