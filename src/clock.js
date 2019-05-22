import React from "react";

class Clock extends React.Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }
  getTime(time) {    
    const second = time.getSeconds();
    let word;    
    //If the current second is a multiple of five then automatically current second will also less then 60
    if(Math.pow(second,5) <= 60)      
      word = 'FizzBuzz';    
    else if(Math.pow(second,3) <= 60)     
      word = 'Fizz';  
    else
      word = second;
    time = time.getHours()+':'+time.getMinutes()+':'+word  
    return time;
  }
  render() {
    const {time} = this.state;
    //current seconds logic
    const displayTime = this.getTime(time);
    return (
      <div>        
        The current time is {displayTime}
      </div>      
    );
  }
}
export default Clock;
