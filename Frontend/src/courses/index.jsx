import Course from "../components/Course/course";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
// import list from '../../public/list.json'

export default function Courses(){
    // console.log(list);
    
    return (
        <>
        <NavBar />
        <div className="min-h-screen">
        <Course />
        </div>
        <Footer />
        </>
    )
}