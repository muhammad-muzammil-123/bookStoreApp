import toast from "react-hot-toast";
import { useAuth } from "../../context/authProvider"

export default function LogOut(){
    const [authUser,setAuthUser] = useAuth();
    const handleLogout =() =>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout Successfully");
            window.location.reload();
        }catch(error){
        toast.error(`Error ${error.message}`);
        }
       
    }

    return(
       <div>
        <button className="py-3 px-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
        >Logout</button>
       </div>
    )
}