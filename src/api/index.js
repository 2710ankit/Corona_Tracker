import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

  export  const fetchData = async ()=>{

    try{

        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
        return {confirmed,recovered,deaths,lastUpdate};

        // const response = await axios.get(url);
        // const {data} = await axios.get(url);

        // const modifiedData = {
        //     confirmed : data.confirmed,
        //     recovered : data.recovered,
        //     deaths : data.deaths,
        //     lastUpdate: data.lastUpdate
        // }
        // return modifiedData;
    }
    catch(error){

    }
}

export const fetchDailydata = async ()=>{
    try{

        const {data} = await axios.get(`${url}/daily`);
        console.log(data)
        return {data};
    }

    catch(error){

    }
}