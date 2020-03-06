import  React,{Component} from 'react';
export default class Tick extends Component{
 constructor(props){
   
  super();
   this.state = {second:0,currentTime:new Date()}
   }
   inTick = () => {
    this.runInterval=  setInterval(() => {
         this.setState(state => ({
            second: state.second + 1,
            currentTime: new Date()

         }))
      },1000);
   }
  componentDidMount(){
    this.inTick();
  }
  componentWillMount(){

  }
  componentWillUnmount() {
  clearInterval(this.runInterval)
  }
   render(){
      const {second,currentTime}=this.state;
      console.log('render');
      return(
         <>hello tick {second}
         <i>{currentTime.toLocaleTimeString()}</i>
         </>
      )
   }
}