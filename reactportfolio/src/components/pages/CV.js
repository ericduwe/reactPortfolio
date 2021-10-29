import React, { useState } from 'react';
import '../../style.css'
import { Document, Page } from 'react-pdf'
import Resume from '../../assets/docs/Eric_Duwe_Resume.pdf'

export default function CV() {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }
    
    return (
    <>
        <container>
            <iframe
                style={{width: "100%", height: "800px", zoom: "1.5", background: "#cda542"}}
                src={Resume}
                type='application/pdf'
                title='title'
                />
        </container>
    </>
    )
}