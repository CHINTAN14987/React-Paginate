// import "./App.css";
// import { useEffect, useState } from "react";
// import Card from "./CardDetails";

// function App() {
//   const [users, SetUsers] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://gorest.co.in/public/v1/users");
//       const data = response.json();
//       return data;
//     };

//     fetchData().then((response) => {
//       SetUsers(response.data);
//     });
//   }, []);
//   return (
//     <div className="App">
//       <Card users={users} />
//     </div>
//   );
// }

// export default App;
