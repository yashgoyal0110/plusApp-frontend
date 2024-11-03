import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // requires a loader
import { useNavigate } from "react-router-dom";


const Courses = () => {
  const navigateTo = useNavigate();
  const courseArray = [
    {
      name: "Web Dev",
      id: 1,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw15wQOyOU_bcTgHpqhICNDO9zBbBbPvmLFQ&s",
    },
    {
      name: "DSA",
      id: 2,
      imageUrl:
        "https://media.licdn.com/dms/image/D4D12AQHRmqtXN9nBsg/article-cover_image-shrink_600_2000/0/1706231429705?e=2147483647&v=beta&t=jiKAClcALfDkLjUTpNdGNKRAmVfaZGdmAsJzv2yqJxk",
    },
    {
      name: "App Dev",
      id: 9,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDB5Q6eukpHhqQxICYMyI947COD7z3baJKcg&s",
    },
    {
      name: "AI/ML",
      id: 3,
      imageUrl:
        "https://www.mindinventory.com/blog/wp-content/uploads/2023/11/ai-ml-in-business-processes.webp",
    },
    {
      name: "Data Science",
      id: 4,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9llMPxlcdg6eer69_vrfLnqHzcIXpRF4Rhg&s",
    },
    {
      name: "AWS",
      id: 5,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDqLKGe3dd67qN068L9efx1SajSvgcHJO5lA&s",
    },
    {
      name: "Cybersecurity",
      id: 6,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-N8vh7jcHIlyqpoc0PP_f2fyewGJsFlDFA&s",
    },
    {
      name: "Ethical Hacking",
      id: 7,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSC8j804jahUxw2DkoibOJ_2qrzM6-yRgzzGeV4GPGrkuKN_sNw6oy2jr4IqS1wEUOABQ&usqp=CAU",
    },
    {
      name: "Data Engineer",
      id: 8,
      imageUrl:
        "https://media.licdn.com/dms/image/D4D12AQGJDTLUwHasJw/article-cover_image-shrink_600_2000/0/1685191084419?e=2147483647&v=beta&t=4ZTHAzDCLzmKLSb-n3LwCU79F3xa9uKYvMcG01HcSGo",
    },
  ];
  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlides: 1,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlides: 1,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlides: 1,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlides: 1,
    },
  };
  const goToDetails = (id) => {
    navigateTo(`/details/${id}`);

  };
  return (
    <div className="container departments">
      <h2>Courses</h2>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["medium", "small"]}
      >
        {courseArray.map((course, idx) => (
          <div className="card" key={idx} onClick={() => goToDetails(course.id)}>
            <div className="course-name">{course.name}</div>
            <img src={course.imageUrl} alt={course.name}></img>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Courses;
