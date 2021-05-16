import React, { Component } from 'react'
import styles from './App.module.css'
import Cards from './components/Cards/Cards'
import Charts from './components/Chart/Charts'
import CountryPicker from './components/CountryPicker/CountryPicker'
import {fetchData} from './api'
export default class App extends Component {

    state={
        data : {}
    }

    
    async componentDidMount(){
        const data= await fetchData();
        // console.log(data);

        this.setState({data : data})
    }

    render() {

        const {data}= this.state;

        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker/>
                <Charts/>
            </div>
        )
    }
}
