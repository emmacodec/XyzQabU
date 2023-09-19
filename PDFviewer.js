import React, { useState } from 'react'


import {Viewer, Worker} from '@react-pdf-viewer/core'
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

const PDFviewer = () => {

const [pdfFile, setPDFile] = useState(null);
const [viewPdf, setViewPdf] = useState(null)

const fileType = ['application/pdf']

const handleChange = (e) => {
    let selectedFile = e.target.files[0]
    if (selectedFile) {
        if (selectedFile && fileType.includes(selectedFile.type)) {
            let reader = new FileReader()
            reader.readAsDataURL(selectedFile)
            reader.onload = (e) => {
                setPDFile(e.target.result)
            }
        }
        else {
            setPDFile(null)
        }
    }
    else {
        console.log("please select file")
    }
}

const handleSubmit = (e) => {
    e.preventDefault()
    if (pdfFile !== null) {
        setViewPdf(pdfFile)
    }
    else {
        setViewPdf(null)
    }
}

const newplugin = defaultLayoutPlugin();

  return (
    <div>
      <form onSubmit={handleSubmit} 
      className='flex justify-center items-center'>
        <input
         className="rounded-lg border-2 p-3  border-gray-300" 
         type='file' 
         onChange={handleChange} />

        <div>
        <button 
        className='rounded-lg border-2 p-3  border-green-300 font-bold text-[#5651e5] w-full'
        
        >
            view PDF
            </button>
        </div>
        
      </form>

      <div className='w-full flex justify-center items-center overflow-y-auto h-full'>
        <Worker WorkerUrl='https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js'>
            {viewPdf && <>
                <Viewer fileUrl={viewPdf} plugins={[newplugin]} />
            </>}
            {!viewPdf && <>No PDF</>}
        </Worker>
      </div>
    </div>
  )
}

export default PDFviewer;
