export type UserType = {
    searchValue: string
    id: number
    login: string
    avatar_url: string
    loading: boolean
    error: string
}

export type ErrorType = {
    message: string
}

export type ResponseType = UserType & ErrorType
