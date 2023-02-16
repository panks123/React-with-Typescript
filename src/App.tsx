import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Button1 from './components/Button1';
import Input from './components/Input';
import Container from './components/Container';
import ExportTypesDemo from './components/ExportTypesDemo';
import UseStateDemo from './components/UseStateDemo';
import Counter from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/Box';
import User from './components/User';
import { UserContextProvider } from './components/context/UserContext';
import UseRefDOMReference from './components/UseRefDOMReference';
import ClassCounter from './components/class/ClassCounter';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';

function App() {
  const personList = [{firstname: "Pankaj", lastname: "Kumar"}, {firstname: "John", lastname: "Doe"}]



  return (
    <div className="App">
      {/* props */}
      <Greet name={"Pankaj"} messageCount={11} isLoggedIn={false}/>
      <Greet name={"Pankaj"} messageCount={11} isLoggedIn={true}/>
      {/* optional props */}
      <Greet name={"Pankaj"}  isLoggedIn={true}/>
      <hr/>
      <PersonList names={personList}/>
      <hr/>
      <Status status='loading'/>
      <Status status='success'/>
      <Status status='failed'/>
      {/* If we try to assign any other string to status props it will show error */}
      {/* <Status status='settled'/> */}
      {/* Type '"settled"' is not assignable to type '"loading" | "success" | "failed"' */}

      <hr/>
      <Heading>This is a heading</Heading> {/*Passing children prop to a component as a string*/}
      {/* Another example of props.children where we pass an another React component as children prop */}
      <Oscar><Heading>Oscar goes to Leonardo Dicaprio</Heading></Oscar>

      <hr/>
      {/* Event props */}
      <Button handleClick={ ()=> {console.log("Button clicked")}}/>
      {/* Another possibility where we may want to pass the event as an argument to the handler and we may want to pass some other arguments as well */}
      <Button1 handleClick= {(event, id)=> { console.log("Button1 clicked", id, event)}}/>

      {/* Event props - with input elements - value props and onChange handler */}
      <Input value='' handleChange={(event)=>{ console.log(event)}}/> 
      {/* For now, I am passing value as '' but in real scenario it will be a state variale */}

      <hr/>
      {/* CSS style props - In case we want to pass props as objects containing CSS styles => e.g.*/}
      <Container style = {{ backgroundColor: 'black', color: 'white', border: '2px solid red', padding: '10px 15px'}}/>

      <hr/>
      {/* In real applications we define types in separate file and export it from there and use them inside our components */}
      <ExportTypesDemo name='Pankaj' salary={1010101}/>

      <hr/>
      {/* useState Hook with typescript*/}
      <UseStateDemo/>
      <hr/>

      {/* useReducer hook with typescript */}
      <Counter/>

      {/* Context API with useContext Hook in Typescript */}
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      {/* UseContext Hook where future value may change */}
      <UserContextProvider>
        <User/>
      </UserContextProvider>

      <hr/>
      {/* useRef Hook with typescript */}
      <UseRefDOMReference/>

      <hr/>
      {/* How we can pass a Component as prop : below we are passing Profile Component as prop */}
      <Private isLoggedIn= {false} Component = {Profile}/>
      <Private isLoggedIn= {true} Component = {Profile}/>

      <hr/>

      {/* Class Based components */}
      {/* Basic class based components - props and state */}
      <ClassCounter message='Current count is'/>
    </div>
    
  );
}

export default App;
