import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    id:1,
    image:'https://placeimg.com/64/64/1',
    name:'bae',
    birthday: '880214',
    gender:'man',
    job:'developer'
  },
  {
    id:2,
    image:'https://placeimg.com/64/64/2',
    name:'so',
    birthday: '910423',
    gender:'official',
    job:''
  },
  {
    id:3,
    image:'https://placeimg.com/64/64/3',
    name:'go',
    birthday: '130330',
    gender:'man',
    job:'student'
  }]

class App extends Component{
  render(){
    return(
      <div>
        {customers.map(c => {return (<Customer key={c.id} id={c.id} image ={c.image} name={c.name} birthday={c.birthday} gender={c.gender}/>);})}
      </div>
    );
  }
}

export default App;
