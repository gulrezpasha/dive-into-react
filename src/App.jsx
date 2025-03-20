import React,{ useState } from "react"

function App() {

  const[title,setTitle]=useState("My name is pasha")
  function updatetitle(){
   setTitle("My name is " +Math.random()*1000);
  }
  return(
    <div>
      <button onClick={updatetitle}>update the title</button>
      <Header title={title}></Header>
      <Header title="pashaa"></Header>
      <Header title="pashaa"></Header>
      <Header title="pashaa"></Header>
      <Header title="pashaa"></Header>
      <Header title="pashaa"></Header>
      </div>
  )
}
  

const Header=React.memo(function Header({title}){
  return(
  <div>
    {title}
  </div>
  )
})
export default App
