import { createAsyncThunk } from '@reduxjs/toolkit'

import { ResponseType } from '../types/repositoryType'

interface Props {
    login: string
}

export const getReposData = createAsyncThunk<ResponseType, Props>(
    'repos/getReposData',
    async (data, thunkApi) => {
        const { rejectWithValue } = thunkApi
        const { login } = data

        try {
            const response: ResponseType = await fetch(
                `https://api.github.com/users/${login}/repos`,
                {
                    method: 'GET',
                    headers: {
                        Authorization:
                            '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',
                    },
                },
            ).then((res) => res.json())

            if (response.message) {
                return rejectWithValue(
                    'Пользователь не найден. Проверьте правильность введенных данных.',
                )
            }

            return response
        } catch (error) {
            return rejectWithValue('Ошибка запроса. Повторите попытку.')
        }
    },
)
