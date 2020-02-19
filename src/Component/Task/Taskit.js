import React from 'react'
import { bindActionCreators } from 'redux'
import { delTask } from '../../Actions/ActList'
import { connect } from 'react-redux'


class Taskit extends React.Component {
    render() {
        return (
            <div id="list-type5" onClick={() => { this.props.delTask(this.props.task)  }}>
                <tr>
                    <td > {this.props.task}</td>

                </tr>
            </div>
        )
    }

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ delTask }, dispatch);
}


export default connect(() => { return {} }, mapDispatchToProps)(Taskit) 