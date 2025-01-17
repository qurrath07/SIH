import React, { useEffect } from "react";
import { Link, useLocation , useNavigate} from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Navbar from "../Components/Navbar";
import TemplateForm from "./Templates/TemplateHome";
import "../Css/Homepage.css"
import Footer from "./Templates/Footer";


const Home = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User's display name:", props.name || location.state?.name);
  }, [props.name, location.state]);

  
  return (
   <div className="homepagebody">
    
      <Navbar name={props.name || location.state?.name}/>
      <h1 className="homepage-h1">Welcome to  Legal Compass</h1>


      {
        getAuth().currentUser &&  <TemplateForm />
      }
        

        {
          getAuth().currentUser &&   <>  <button>  <Link to="https://hrrakesh.pythonanywhere.com/">ChatBot</Link> </button></>
        }
     

    <Footer/>
   </div>
  );
};

export default Home;
