import {SignupFrom} from "../../components/SignupFrom/SignupFrom.jsx";
import {Toaster} from "react-hot-toast";

function NewUsers(){
    return (
        <>
            <div><Toaster/></div>
            <h2 style={{textAlign: "center", margin: "20px 0"}}>Utwórz nowe konto</h2>
            <SignupFrom/>
        </>
    );
}

export default NewUsers;