import React, { useState , useEffect } from "react"
import { Alert } from "antd"

//ประกาศ Prop
type alertProp = {
    vis: boolean,
    msg: string,
    type: "success" | "info" | "warning" | "error" | undefined
    //type ถูกล้อคไว้ว่ามีแค่ 4 ตัวนี้เท่านั้น
}

export const Alert_c = (Prop: alertProp) => {
    //โยน Props เข้ามาและให้ค่ามันใน component
    const {vis, msg ,type} = Prop
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(vis)
    },[])

    return (<>
        {visible && <Alert message={msg} type={type}/>}
    </>)
}