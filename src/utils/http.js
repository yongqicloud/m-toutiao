import axios from 'axios'
export const get = ({
  channel
}) => {
  return axios.get(`/list/?tag=${channel}&ac=wap&count=20&format=json_raw&as=A1459D6CFE2A44C&cp=5DCE6A2454BC2E1&min_behot_time=0&_signature=fng24AAAI7iHg97vgAprfX54Nv&i=`)
    .then((result) => {
      console.log(result.data)
      return result.data.data
    })
    .catch((error) => {
      return error.message
    })
}
export const getDetails = () => {
  return axios({
    url:'/api',
  })
  .then((result)=>{
    return result.data
  })
  .catch((error)=>{
    return error.message
      
  })

}
// export const getAll = () => {
//   return axios.get(`/api/news/feed/web/v47/?aid=1230&channel=m_web&device_platform=wap&category=motor_car&max_behot_time=0&min_behot_time=1573997051&web_id=6757876708164716035&impression_info=%7B%22page_id%22:%22page_category%22,%22sub_tab%22:%22motor_car%22,%22product_name%22:%22m_station%22,%22zt%22:%22default%22%7D&tt_from=pull`)
//     .then((result) => {
//       console.log(result.data)
//       return result.data.data
//     })
//     .catch((error) => {
//       return error.message
//     })
// }