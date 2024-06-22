import {http} from '../Service/AxiosHelper'

export const loadProduct=()=>{
  return http.get(`/product/viewAll`).then(res=>res.data);
}