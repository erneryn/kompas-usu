import Navbar from "../navbar";
import Contact from "../contact";

export default function Layout({children, type}){
    return(
        <div>
            <Navbar type={type}/>
            {children}
            <Contact/>
        </div>
    )
}