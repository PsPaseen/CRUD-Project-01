import axios from 'axios'
import { loginType } from '../datatype/data_type';

const API_URL = 'http://172.16.200.202:8089';

export const postLogin = async ( data: loginType ) => {
    try{
        const res = await axios.post(`${API_URL}/api/User/login` , {
            loginName: data.loginName ,
            password: data.password
        })
        console.log(`=== ${res?.data?.accessToken} ===`)
        localStorage.setItem("accessToken",res?.data?.accessToken )
        if(res.status === 200){
            return res;
        }
    }catch(error){
        // console.log(`=== ${error} ===`)
        // return error
        //ใช้การคืนค่า error ไม่ได้ต้อง throw error ออกข้างนอก
        throw new Error(error)
    }

};