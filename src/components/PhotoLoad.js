import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import ImageRow from './ImageRow';

function PhotoLoad() {
    const [urlImages, setUrlImages] = useState([]);

    const fileToDataUrl = file => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
        
          fileReader.addEventListener('load', evt => {
            resolve(evt.currentTarget.result);
          });
          
          fileReader.addEventListener('error', evt => {
            reject(new Error(evt.currentTarget.error));
          });
          
          fileReader.readAsDataURL(file);
        });
      }
      
      const handleSelect = async (evt) => {
          const files = [...evt.target.files];
          const urls = await Promise.all(files.map(o => 
            fileToDataUrl(o)
          )
          );
          const urlsWithId = urls.map((url) => {
            return {
              id: nanoid(),
              url: url
            }
          })
          console.log(urls);
          setUrlImages(prev => ([...prev, ...urlsWithId]));
          console.log(urlImages);
      }

      const handleRemove = (id) => {
        setUrlImages(prevUrl => prevUrl.filter(item => item.id !==id))
      }

  return (
    <div className="container">
        <input type="file" className="custom-file-input" onChange={handleSelect} multiple />
        <ImageRow urlImages={urlImages} handleRemove={handleRemove}/>
    </div>
  )
}

export default PhotoLoad
