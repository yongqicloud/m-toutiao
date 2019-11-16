import axios from 'axios'
export const get = ({channel}) =>{
    return axios.get(`/list/?tag=${channel}&ac=wap&count=20&format=json_raw&as=A1459D6CFE2A44C&cp=5DCE6A2454BC2E1&min_behot_time=0&_signature=fng24AAAI7iHg97vgAprfX54Nv&i=`)
     .then((result)=>{
       console.log(result.data)
        return result.data
      })
     .catch((error)=>{
        return error.message
      })
  }
