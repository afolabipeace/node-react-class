import React, {useState} from 'react'
import axios from 'axios'
function UploadFile() {
    const [myFile, setmyfile] = useState()
    const [image, setimage] = useState("")
    const url = "https://instagramm-091.herokuapp.com/upload"
    const pickFile=(e)=>{
       const file = e.target.files[0]
       const reader= new FileReader()
       reader.readAsDataURL(file)
    //    console.log(reader.result);
       reader.onload=()=>{
           const result =reader.result
           console.log(reader.result)
           setmyfile(result)
       }
    }
       const upload = ()=>{
            const userfile = {myFile}
            axios.post(url,userfile).then((res)=>{
                console.log(res)
                setimage(res.data.image)
            })
           
       }
  return (
    <>
        <input type="file" onChange={(e)=>pickFile(e)}/>
        <button onClick={upload}>Upload</button>
        <img src={image} alt="" />
    </>
  )
}

export default UploadFile