import axios from 'axios'
import React, { Component } from 'react'

export default class Pizza  extends Component {


    
    state= {
        results:[]
    }


    getNews=async ()=>{
        let {data} = await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')
        let results= data.recipes;
        this.setState({results})
        console.log(results);
    }

    componentDidMount(){
        this.getNews()
    }



  render() {
    return (
      <>
      <div className="container">
      <div className="row justify-content-center align-itmes-center">
        {this.state.results.map((result , index) => <div key={index} className='col-md-3 '> 
        
        <div className='image-content w-100'>
            <div className="image w-100 ">
                <img src={result.image_url} className='w-100 myImage' alt=""/>
            </div>
            <h4 className='fw-bold'>{result.title}</h4>
            <p>{result.description}</p>
        </div>
        
         </div>)}
      </div>
      </div>
      
      </>
    )
  }
}
