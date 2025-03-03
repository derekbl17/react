import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

export default class Fetched extends Component {
    constructor(props){
        super(props)
        this.state={
            data:null,
            loading:true,
            error:null
        }
    }

    async componentDidMount(){
        try{
            const response=await axios.get('https://reqres.in/api/users?page=1');
            this.setState({data:response.data.data,loading:false})
        } catch(error){
            this.setState({error:error.message, loading: false})
        }
    }
  render() {
    const {data,loading,error}=this.state
    if (loading){
        return <div>Fetching data....</div>
    }
    if (error){
        return <div>Error fetching data.. {error}</div>
    }
    return (
        <div className='card-container'>
            {data.map(user=>(
                <Card
                key={user.id}
                id={user.id}
                email={user.email}
                first_name={user.first_name}
                last_name={user.last_name}
                avatar={user.avatar}
                />
            ))}
        </div>
    )
  }
}
