import {http} from '../Service/AxiosHelper'

export const loadCategory= ()=>{
  return http.get(`/category/viewAll`).then(response=>response.data);
}

export const onSelectCategory=(id)=>{
  return http.get(`/product/getbyCategoryId/${id}`).then(response=>response.data)
}