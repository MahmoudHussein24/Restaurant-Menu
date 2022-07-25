import React, { Component } from 'react'
import axios from 'axios'

export default class Salad extends Component {

    state= {
        results:[]
    }


    getNews=async ()=>{
        let {data} = await axios.get('https://forkify-api.herokuapp.com/api/search?q=salad')
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
          <div className="row  justify-content-center align-itmes-center">
        {this.state.results.map((result , index) => <div key={index} className='col-md-3'> 
        
        <div className='image-content'>
            <div className="image">
                <img src={result.image_url} className='w-100 myImage' alt="" srcSet="" />
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
