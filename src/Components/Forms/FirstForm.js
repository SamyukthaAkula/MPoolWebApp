import React from 'react';
import { Card,Steps, Modal,Button, message,Input  } from 'antd';
import Dropdown from 'react-dropdown'
const options = [
    'Select' 
  ]
  const defaultOption = options[0]

class FirstForm extends React.Component{
    render(){
        return (
            <div>
           
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
                  </div>
                </div>
               </Card>
               </div>
           
          </div>
          
           );
         }
}

export {
    FirstForm
}

