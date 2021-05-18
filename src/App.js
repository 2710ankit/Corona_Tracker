import React, { Component } from 'react'
import styles from './App.module.css'
import Cards from './components/Cards/Cards'
import Charts from './components/Chart/Charts'
import CountryPicker from './components/CountryPicker/CountryPicker'
import {fetchData} from './api'
import coronaImage from './images/image.png';
export default class App extends Component {

    state={
        data : {},
        country : ''
    }

    handleCountryChange = async(country)=>{
        // console.log(country)
        const fetchedData = await fetchData(country);
        this.setState({data : fetchedData, country:country})
    }
    
    async componentDidMount(){
        const data= await fetchData();
        this.setState({data : data})
        
    }

    render() {
        // console.log(this.state.data);
        const {data,country}= this.state;

        return (
            <div className={styles.container}>
                <img src={coronaImage} className={styles.image}></img>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country}/>
            </div>
        )
    }
}
