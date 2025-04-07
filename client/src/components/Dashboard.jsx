// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState(null);

//   // Check if user is logged in
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       // If not logged in, redirect to login page
//       navigate("/login");
//     } else {
//       // If logged in, fetch user data or show dashboard content
//       // You can also make an API call to fetch user data if required
//       setUserData({ name: "John Doe", email: "john.doe@example.com" });
//     }
//   }, [navigate]);

//   return (
//     <div>
//       <h1>Welcome to Your Dashboard</h1>
//       {userData && (
//         <div>
//           <h2>User Info</h2>
//           <p>Name: {userData.name}</p>
//           <p>Email: {userData.email}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
