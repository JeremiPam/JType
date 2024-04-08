import axios from "axios";

export default axios.create({
    baseURL: 'https://wordsapiv1.p.rapidapi.com',
    params: {random:'true'},
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
}
)