import { createAPI, fetchBaseQuery } from "./@reduxjs/toolkit/query";

const CryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "668afa388emshb3878c6c16becdcp1e98fejsn7dfe59adb250",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/coins";

const createRequest = (url) => ({ url, headers: CryptoApiHeaders });

export const cryptoApi = createAPI({
  reducerPath: "CryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});


export const {
    useGetCryptosQuery,
}