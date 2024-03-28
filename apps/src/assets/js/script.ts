import { createClient } from 'newt-client-js'

export interface Article {
    _id: string
    title: string
    content: string
    thumbnail: {
        src: string
    }
    _sys: {
        createdAt: string
        updatedAt: string
    }
}

export const newtClient = createClient({
    spaceUid: import.meta.env.NEWT_SPACE_UID,
    token: import.meta.env.NEWT_CDN_API_TOKEN,
    apiType: 'cdn',
})
