
// function App() {

import { useState } from "react";


//   return (
//     <div>
//       <counter/>
//     </div>  )
// }

const App=()=>{
  // const clothes="shirt";
  const[clothes,setClothes]=useState("shirt")   // state 
  // const shoes="sneakers";
  const ChangeCothes=()=>{
    setClothes("pants");

  }


  return(
    <div>
      {clothes}
      <button onClick={ ChangeCothes}>Change clothes</button>
        <p> react</p>
    </div>
  );
};

export default App
