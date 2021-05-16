import React,{useState,useEffect} from 'react';
import { fetchDailydata } from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Charts.module.css'
const Charts = () => {

    const [dailydata,setDailyData] = useState([]);

    useEffect(() => {
        
        const fetchApi = async ()=>{
            const dailyData = await fetchDailydata();
        }

        fetchApi();

    });

    const lineChart=(
        
        dailydata.length != 0
        ?
        <Line
            data={{
                labels : '',
                datasets : [{},{}]

            }}
        />
        :
        null
        
    )
    

    return (
        <div>
            <h2>charts</h2>
        </div>
    )
}

export default Charts
