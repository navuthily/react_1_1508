import React ,{Component} from 'react';
export default class DemoStateful extends Component{
   constructor(props){
      super()
   }
   render(){
         let {username, fullname}=this.props;
      return(
        <div> 
         
         <div>{username} va {fullname}</div></div>

      )
   }
}