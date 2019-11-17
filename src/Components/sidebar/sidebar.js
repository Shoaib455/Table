import React,{useState} from 'react'
import Style from './style'; 
import MultiSlider, { Progress, Dot } from 'react-multi-bar-slider';
 
export default()=> {
 
    const [progress,setProgress]=useState(100) 
 
const handleSlide = newProgress => setProgress( newProgress );
 


    return (
        <div className="container-fluid">
            <div>{`$${progress}`}</div>
            <div className="slider ml-5 mt-5">     
            
            <MultiSlider
                width={600}
                height={25}
                slidableZoneSize={40}
                backgroundColor="#dcdcdc"
                equalColor="#8b6ba3"
                style={{marginBottom: 40}}
                onSlide={handleSlide}
                onDragStart={progress => console.log(`Started dragging: ${progress}%`)}
                onDragStop={progress => console.log(`Stopped dragging: ${progress}%`)}
                
                
                > 
                <Progress color="green" progress={progress}>
                <Dot color="blue"  style={{height:"120px",width:"60px"}}/>
                </Progress>


                {/* <Progress color="purple" progress={45}>
                <Dot color="grey" />
                </Progress> */}
            </MultiSlider>
            </div>
            <Style/>
    </div>
      );
}


// import MultiSlider, { Progress } from 'react-multi-bar-slider';
// import Style from './style'; 

// export default class App extends Component {
//   state = {
//     progress: 10
//   };
 
//   handleSlide = newProgress => this.setState({ progress: newProgress });
 
//   render() {
//     return (
//         <div className="container-fluid">
//             <div className="multislider" >
//       <MultiSlider className="multislider" onSlide={this.handleSlide}>
//         <Progress className="multislidergreen" color="green" progress={this.state.progress} />
//         <Progress className="multisliderpurple" color="purple" progress={45} />
//       </MultiSlider>
//       </div>
//       <Style/>
//       </div>
//     );
//   }
// }