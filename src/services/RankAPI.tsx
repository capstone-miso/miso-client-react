import axios from 'axios'

const url = 'https://dishcovery.site/api/rank'

export const getApiData = async () => {
  const data = await axios.get(url, {
    params: {
      keyword: 'WINTER',
      page: 0,
      size: 10
    }})

  return data.data
}