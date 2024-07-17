import { useState } from "react";
import { useForm } from "react-hook-form";
// import Button from "../../components/button/Button";
// import Input from "../../components/input/input";
{/* Open the modal using document.getElementById('ID').showModal() method */}
export default function Login(){
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
// const [email, setEmail] = useState('');
// console.log(email);
// const [password, setPassword] = useState('');
// console.log(password);
// const handleChange = (value) =>{
//   setEmail(value)
 
// }
// const handleChangeTwo = (value) =>{
// setPassword(value)
// }
// const loginForm = () =>{
//   if(email.trim() === "" ){
//     console.log("email is required");
//   }
// }
    return(
        <>
        {/* <button className="btn" onClick={}></button> */}
<dialog id="my_modal_1" className="modal">

  <div className="modal-box">
  <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
<input type="email" className="input bordered border-none py-2 mt-2 w-full max-w-x" placeholder="Enter your email"  {...register("email", { required: true })}  /><br />
{errors.email && <span className="text-sm text-red-500">This field is required</span>}
<input type="password" className="input bordered border-none py-2 mt-2 w-full max-w-x" placeholder="Enter your password"  {...register("password", { required: true })}  /><br />
{errors.password && <span className="text-sm text-red-500">This field is required</span>}<br />
    <button className="btn ">Login</button>
    <p className="py-4"> If you don't have an acount <a className="text-blue-500" href="/signup">Registered  </a>Now</p>
    <div className="modal-action">
 
      
     
        <button  className="btn"><a href="/">Close</a></button>
     
    </div>
    </form>
  </div>

</dialog>
        </>
    )
}
