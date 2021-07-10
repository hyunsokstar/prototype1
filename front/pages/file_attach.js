import React, { useCallback, useEffect } from "react";
import { useDropzone } from 'react-dropzone'
import Head from "next/head";
import AppLayout2 from "../components/AppLayout2";



const h1_style = {
    textAlign:"center",
    fontWeight: 900,
}

const dropzone_style = {
    background: "white",
    borderRadius: "5px",
    border: "2px dashed rgb(0, 135, 247)",
    borderImage: "none",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto"
}


function file_attach() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(
            "acceptedFileds : ", acceptedFiles
        );
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <>
            <Head>
                <title>파일 첨부 prototype </title>
            </Head>
            <AppLayout2>
                <h1 style={h1_style}>File Attach Demo</h1>
                <div {...getRootProps()} style={dropzone_style}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <p>Drop the files here ...</p> :
                            <p>Drag 'n' drop some files here, or click to select files</p>
                    }

                    <div style={{height:"80px"}}></div>

                </div>
            </AppLayout2>

        </>
    )
}

export default file_attach;
