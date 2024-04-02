import React from 'react'
import FormContainer from './FormContainer'
import { useState, useEffect } from 'react';
import { serverUrl } from '../helpers/Contants';
import axios from 'axios';
import DataTable from './DataTable';

export type urlData = {
    _id : string;
    fullUrl : string;
    shortUrl:string;
    clicks : number;
};

const Container = () => {
    const [data, setData] = useState<urlData[]>([]);
    const [reload, setReload] = useState<boolean>(false);

    const fetchTableData = async()=>{
        const response = await axios.get(`${serverUrl}/shortUrl`);
        // console.log("The response from the server is : ", response);
        setData(response.data);
        setReload(false);
    }
    useEffect(()=>{
        fetchTableData();
    },[reload]);

    const updateReloadState = ():void =>{
        setReload((prev)=>!prev);
    }
  return (
    <>
    <FormContainer updateReloadState={updateReloadState}/>
    <DataTable data={data} updateReloadState={updateReloadState}/>
    </>

  )
}

export default Container