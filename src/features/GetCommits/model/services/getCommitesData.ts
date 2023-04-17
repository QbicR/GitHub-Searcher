import { createAsyncThunk } from '@reduxjs/toolkit'

import { ResponseType } from '../types/commitType'

interface Props {
    login: string
    reposName: string
}

export const getCommitesData = createAsyncThunk<ResponseType, Props>(
    'commites/getCommitesData',
    async (data, thunkApi) => {
        const { rejectWithValue } = thunkApi
        const { login, reposName } = data

        try {
            const response: ResponseType = await fetch(
                `https://api.github.com/repos/${login}/${reposName}/commits`,
                {
                    method: 'GET',
                    headers: {
                        Authorization:
                            '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',
                    },
                },
            ).then((res) => res.json())

            if (response.message) {
                return rejectWithValue('Коммиты не найдены. Репозиторий пуст.')
            }

            return response
        } catch (error) {
            return rejectWithValue('Ошибка запроса. Повторите попытку.')
        }
    },
)
