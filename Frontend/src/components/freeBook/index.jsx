import list from "../../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../Cards/index.jsx";
export default function FreeBook(){
    const filterData = list.filter((data) =>{
          return data.category === "free";
    });
    console.log(filterData);
    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 2,
      };
    return(
        <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
        <h1 className="font-bold text-xl pb-2">Free Offered Courses</h1>
        <p>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. Sequi impedit suscipit saepe earum delectus id incidunt molestiae distinctio, deleniti ab.</p>
        </div>
     
      <div>
      <Slider {...settings}>
      {filterData.map((items) =>(<Card items={items} key={items.id}/>)
        
      

      )}
    </Slider>
      </div>
      </div>
        </>
    )
}