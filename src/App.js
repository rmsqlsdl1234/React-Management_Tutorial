import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '박은빈',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '디자이너'
},
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '김하온',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '래퍼'
}

]

class App extends Component{
  render(){
    return(
      <div>
      {
        customers.map(c=>{
          return (
            <Customers
              key = {c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
      </div>
    );
  }
}

export default App;
