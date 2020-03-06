
import React ,{Component} from 'react';
import Product from './Product';
export default class DemoStateful extends Component{
  users =[{username: 'an', fullname:'vuthillynan'},
  {username: 'na', fullname:'vuthillyna'},
  {username: 'ly', fullname:'vuthillynaly'}]
   render(){
         
      return(
        <div> 
         <div>
         {this.users.map(user=>(
            <Product key={`key:${user.name}`}
            {...user}
            />
         ))}   
         </div></div>

      )
   }
}