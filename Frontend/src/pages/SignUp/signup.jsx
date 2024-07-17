// import Button from "../../components/button/Button";
// import Input from "../../components/input/input";
import Login from "../Login/login";
import { useForm } from "react-hook-form";
export default function SignUp(){
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return(
        <>
        <div className="flex h-screen items-center justify-center">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

<div  className="w-[600px]">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><a href="/">✕</a></button>
   
    <h3 className="font-bold text-lg">Sign Up</h3>
   <input type="text" className="input bordered border-none py-2 mt-2 w-full max-w-x" placeholder="Full Name" {...register("fullname", { required: true })}  /><br />
   {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
   <input type="email" className="input bordered border-none py-2 mt-2 w-full max-w-x" placeholder="Email" {...register("email", { required: true })}  /><br />
   {errors.email && <span className="text-sm text-red-500">This field is required</span>}
   <input type="password" className="input bordered border-none py-2 mt-2 w-full max-w-x" placeholder="Password" {...register("password", { required: true })}  /><br />
   {errors.password && <span className="text-sm text-red-500">This field is required</span>}<br />
        <button className="btn ">Sign Up</button>
    <p className="py-4">if you have an already acount <a className="text-blue-500 cursor-pointer" onClick={() =>document.getElementById("my_modal_1").showModal()}
        >
            Login </a>Now</p>
</form>
            <Login />
  </div>
  
</div>
</div>       
        
        </>
    )
}