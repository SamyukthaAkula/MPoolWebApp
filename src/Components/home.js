import React, { Component,useEffect } from 'react';
import { Card, Steps, Button, message, } from 'antd';
import Dropdown from 'react-dropdown'
import { FirstForm } from './Forms/FirstForm'
import 'react-dropdown/style.css'
import { getBranches } from '../services'

const { Step } = Steps;
const options = [
  'one', 'two', 'three'
]
const defaultOption = options[0]

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      selected: 'radio-1',
      isVisibleTwoWheeler: false,
      isVisibleFourWheeler: false,
      isVisiblePassenger: false,
      checked: false

    }
     const { Step } = Steps;


  }
 
  componentDidMount(){
    getBranches().then((res)=>{
      console.log(res,"sdfjgdjfsdghdfgdhfgfhdgfhsdgfdhfgdhfgdfhdgf")
    })
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
 

  render() {
    const { current } = this.state;

    const steps = [
      {
        title: 'First',
        content: <FirstForm/>,
      },
      /*  {
         title: 'Second',
         content:this.Secondform(),
       }, */


    ];
    return (
      <div  >
          <div class="form">
              <Card title="Details" bordered={false} style={{ width: '400px' }}> 
                <div class="row">
                  <div class="col-md-20">
                    <div class="form-group">
                      Branch: < Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                    </div>
                    <div class="form-group">
                      Routing: < Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                    </div>
                    <div class="form-group">
                    <Button>click me</Button>
                    </div>
                    
                  </div>
                  
                </div>
               </Card>
               <div class="logo">M-POOL</div>
               </div>
              
         {/*  <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => this.next()}>
                Next
            </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => this.goToPooler()}>
                Done
            </Button>
            )}
            {current > 0 && (
              <Button style={{ marginLeft: 4 }} onClick={() => this.prev()}>
                Previous
            </Button>
            )}
          </div>
         */}

      </div>
    )
  }
}

export default Home;