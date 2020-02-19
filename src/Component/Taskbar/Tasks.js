import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {addTask}  from '../../Actions/ActList'
class Tasks extends React.Component{ 
    render()
    {
        return(
            <div> 
                <input name ="Hello" type='text' id="myInput" ref ="task" placeholder = "Enter your text" />
                <button id="alt" onClick = {() => this.props.addTask(this.refs.task.value)}>Add Text</button>
            </div>
        )
    }

}
function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask},  dispatch);
}

export default connect(()=>{return {};},mapDispatchToProps)(Tasks)  