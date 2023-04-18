import axios from 'axios'

export const $api = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization:
            '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',
    },
})
