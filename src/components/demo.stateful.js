import React ,{Component} from 'react';
export default class DemoStateful extends Component{
   constructor(props){
      super()
   }
   render(){
         let {username, email}=this.props;
      return(
        <div> 
           <div>chos na</div>
         <div>{username} va {email}</div></div>

      )
   }
}