import axios from 'axios'
// import { SSL_OP_NO_TLSv1 } from 'constants'
export const get = ({
  channel,
  i= ''
}) => {
  return axios.get(`/list/?tag=${channel}&ac=wap&count=20&format=json_raw&as=A1459D6CFE2A44C&cp=5DCE6A2454BC2E1&min_behot_time=0&_signature=fng24AAAI7iHg97vgAprfX54Nv&i=${i}`)
    .then((result) => {
      console.log(result.data)
      return result.data.data
    })
    .catch((error) => {
      return error.message
    })
}
export const getNewsList = ({
  url,
  params
}) =>{
  return axios({
    url,
    params
  })
  .then((result)=>{
    return result.data.data
  })
  .catch((error)=>{
    return error.message
  })
}
export const getDetails = ({
  url,
  params,
}) => {
  return axios({
    url,
    params
  })
  .then((result)=>{
    return result.data
  })
  .catch((error)=>{
    return error.message
  })

}
export const getRecommand = ({
  url
})=>{
  return axios({
    url,
    params:{
      parent_rid: 21543811574341590662,
      city: '北京',
      province: '北京',
      page_type: 'article',
      share_iid: "",
      wx_share_count: 0,
      site_id: 5000246,
      num: 5,
      num: 15,
      code_id: 14798012085000246,
      code_id: 14799599715000246,
      except_page: "",
      test_params: {},
      tt_running: 0,
      enable_mix: 1,
      web_id: 6761594317544670731,
      utm_source: "",
      utm_medium: "",
      utm_campaign:"",
    }
  })
  .then((result)=>{
    return result.data
  })
  .catch((error)=>{
    return error.message
  })
}
