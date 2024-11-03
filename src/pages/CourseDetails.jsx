import { useParams } from "react-router-dom";
import "../courseDetails.css";
const CourseDetails = () => {
  const { id } = useParams();

  const courseArray = [
    {
      name: "Web Dev",
      id: 1,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw15wQOyOU_bcTgHpqhICNDO9zBbBbPvmLFQ&s",
      embedLink: "https://www.youtube.com/embed/lH1bGIEHboI",
    },
    {
      name: "DSA",
      id: 2,
      imageUrl:
        "https://media.licdn.com/dms/image/D4D12AQHRmqtXN9nBsg/article-cover_image-shrink_600_2000/0/1706231429705?e=2147483647&v=beta&t=jiKAClcALfDkLjUTpNdGNKRAmVfaZGdmAsJzv2yqJxk",
        embedLink: "https://www.youtube.com/embed/9KeE_uDsOI8"
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
  const reqCourse = courseArray.find((course) => course.id === parseInt(id));
  return (
    <>
      return (
      <div className="outerDiv">
  
        <div className="detailCard leftCourse">
          <img
            src={reqCourse.imageUrl}
            alt={reqCourse.name}
            className="detailImage"
          />
          <div className="courseContent">
            <h2 className="courseName">{reqCourse.name}</h2>
            <p className="instructorName">Instructor: Venry jen</p>
            <p className="detail">
              <strong>Price:</strong> $100
            </p>
            <p className="detail">
              <strong>Duration:</strong> 6months
            </p>
            <p className="detail">
              <strong>Mode:</strong> Online
            </p>
            <p className="detail">
              <strong>Validity:</strong> 1 year
            </p>
            <button className="buyNowButton">Buy Now</button>
          </div>
        </div>

        <div className="iframeContainer">
        
        <iframe
          className="videoFrame topFrame"
          src="https://www.youtube.com/embed/9KeE_uDsOI8"
          title="Left Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

          <iframe
          className="videoFrame bottomFrame"
          src="https://www.youtube.com/embed/9KeE_uDsOI8"
          title="Left Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        </div>

        <div className="detailCard rightCourse">
          <img
            src={reqCourse.imageUrl}
            alt={reqCourse.name}
            className="detailImage"
          />
          <div className="courseContent">
            <h2 className="courseName">{reqCourse.name}</h2>
            <p className="instructorName">Instructor: Venry jen</p>
            <p className="detail">
              <strong>Price:</strong> $100
            </p>
            <p className="detail">
              <strong>Duration:</strong> 6months
            </p>
            <p className="detail">
              <strong>Mode:</strong> Online
            </p>
            <p className="detail">
              <strong>Validity:</strong> 1 year
            </p>
            <button className="buyNowButton">Buy Now</button>
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default CourseDetails;
