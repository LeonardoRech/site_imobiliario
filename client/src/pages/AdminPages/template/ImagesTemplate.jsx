import axios from 'axios'
import React, {useState} from "react"

export default function ImagesTemplate(){
    const [image, setImage] = useState({})
    const [idImovel, setIdImovel] = useState('')
  
    const onFormSubmit = (event) => {
      event.preventDefault()
  
      const formData = new FormData()
      formData.append("image", image)
      formData.append("idImovel", idImovel)
  
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      const url = 'http://localhost:5000/images'
      axios.post(url, formData, config).then((response) => {
        alert("Image Uploaded")
      }).catch((err) => {
        console.log('err', err)
      })
    }
    
    const onInputChange = (e) => {
      setImage(e.target.files[0])
    }
    
    const onInputChangeIdImovel = (e) => {
      setIdImovel(e.target.value)
    }
  
    return (
      <div>
        <form onSubmit={onFormSubmit} className="flex flex-col">
          <input 
            type="file" 
            name="image" 
            onChange={onInputChange} 
            className=""
          />
          <input 
            type="text" 
            name="idImovel"
            placeholder='Digite o Código do Imóvel' 
            onChange={onInputChangeIdImovel} 
            className={`
                w-60 p-1 mt-5
                rounded    
            `}
        />
          <button 
            type="submit"
            className={`
                bg-yellow-400 hover:bg-yellow-500
                mt-5 w-32 h-10 m-auto
                rounded text-lg uppercase
            `}
        >
            Salvar
        </button>      
        </form>
        <div>
            
        </div>
      </div>
    );

}