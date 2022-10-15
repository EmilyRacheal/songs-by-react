import{createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";



    export const shazamCoreApi = createApi({
        reducerPath:'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set("X-RapidAPI-Key", "f277fecca7msh7fe2081ff13d105p189bcbjsn99349c015e7e" );

                return headers;
            },
        }),
        endpoints:(builder) =>({
            getTopCharts: builder.query({query: () => "/charts/world"}),
            getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
        }),
    });

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
    } = shazamCoreApi