import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNews ={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '90e2d7e683msh84a26e646671193p1b6482jsnad311aced36a' 
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url)=>({url, headers: cryptoNews})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptoNews: builder.query({
            query: ({newsCategory, count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})
export const {useGetCryptoNewsQuery} = cryptoNewsApi;