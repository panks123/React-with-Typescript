import  { Component } from 'react'

type ClassCounterProps = {
    message: string
}

type ClassCounterState = {
    count: number
}

//  So we pass the props and state as below :<PropsType, StateType> 
// In case we have only props but no state we pass: <PropsType> only
// In case we have state but no props we pass: <{}, StateType> i.e. an empty object for PropType and then StateType
class ClassCounter extends Component<ClassCounterProps, ClassCounterState> {
    constructor(props: ClassCounterProps){ // We need to specify the proptype in the constructor as well
        super(props)
        this.state = {
            count: 0
        }
    }

    handleClick = ()=>{
        this.setState((prevState)=> { return { count: prevState.count + 1}})
    }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment count</button>
        <p>{this.props.message} : {this.state.count}</p>
      </div>
    )
  }
}

export default ClassCounter
