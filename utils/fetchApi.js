import axios from 'axios';


export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '65a6da3148mshc43a9ebd5ee32d7p1d273ejsna048cdb39e8a'
          }
    })
    console.log(data);
    return data;
}