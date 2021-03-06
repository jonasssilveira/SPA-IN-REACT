import axios from 'axios'

export const api = axios.create({
    baseURL:'http://localhost:5000'
})

export const busca = async(url, setDados)=>{
    const res = await api.get(url)
    setDados(res.data)
}