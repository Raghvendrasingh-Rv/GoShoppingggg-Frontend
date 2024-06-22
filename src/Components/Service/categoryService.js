import {http} from '../Service/AxiosHelper'

export const loadCategory= ()=>{
  return http.get(`/category/viewAll`).then(response=>response.data);
}