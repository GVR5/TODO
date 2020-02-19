import React from 'react'
import { connect } from 'react-redux'
import Taskit from '../Task/Taskit'

class Listit extends React.Component {
    render() {
        return (
            <div >
                <center >
                    <div >
                        {this.props.tasks.map((tasks, item) => <Taskit key={item} task={tasks} />)}
                    </div>
                </center>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}
export default connect(mapStateToProps)(Listit) 