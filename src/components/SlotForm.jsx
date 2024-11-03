import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const SlotForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [referalCode, setReferalCode] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [slotDate, setSlotDate] = useState("");
  const [course, setCourse] = useState("Web Dev");
  const [instructorFirstName, setInstructorFirstName] = useState("");
  const [instructorLastName, setInstructorLastName] = useState("");
  const [comment, setComment] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);

  const coursesArray = [
    "Select Course",
    "Web Dev",
    "DSA",
    "AI/ML",
    "App Dev",
    "Ethical Hacking",
    "Cybersecurity",
    "Data Science",
    "Data Engineer",
    "AWS",
  ];

  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    const fetchInstructors= async () => {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/user/instructors",
        { withCredentials: true }
      );
      setInstructors(data.instructors);
      console.log(data.instructors);
    };
    fetchInstructors();
  }, []);
  const handleSlot = async (e) => {
    e.preventDefault();
    try {
      const whatsappBool = Boolean(whatsapp);
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/slot/post",
        {
          firstName,
          lastName,
          email,
          phone,
          referalCode,
          dob,
          gender,
          slot_date: slotDate,
          course,
          instructor_firstName: instructorFirstName,
          instructor_lastName: instructorLastName,
          whatsapp: whatsappBool,
          comment,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
        setFirstName(""),
        setLastName(""),
        setEmail(""),
        setPhone(""),
        setReferalCode(""),
        setDob(""),
        setGender(""),
        setSlotDate(""),
        setCourse(""),
        setInstructorFirstName(""),
        setInstructorLastName(""),
        setWhatsapp(""),
        setComment("");
    } catch (error) {
      toast.error(error.response.data.message || "Can't book slot");
    }
  };

  return (
    <>
      <div className="container form-component appointment-form">
        <h2 className="h2">Schedule Demo</h2>
        <form onSubmit={handleSlot}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Referal Code"
              value={referalCode}
              onChange={(e) => setReferalCode(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)} >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Female">Custom</option>
            </select>
            <input
              type="date"
              placeholder="Slot Date"
              value={slotDate}
              onChange={(e) => setSlotDate(e.target.value)}
            />
          </div>
          <div>
            <select
              value={course}
              onChange={(e) => {
                setCourse(e.target.value);
                setInstructorFirstName("");
                setInstructorLastName("");
              }}
            >
              {coursesArray.map((course, index) => {
                return (
                  <option value={course} key={index}>
                    {course}
                  </option>
                );
              })}
            </select>
            <select
              value={`${instructorFirstName} ${instructorLastName}`}
              onChange={(e) => {
                const [firstName, lastName] = e.target.value.split(" ");
                setInstructorFirstName(firstName);
                setInstructorLastName(lastName);
              }}
              disabled={!course}
            >
              <option value="">Select Instructor</option>
              {instructors
                .filter((instructor) => instructor.instructorCourse === course)
                .map((instructor, index) => (
                  <option
                    value={`${instructor.firstName} ${instructor.lastName}`}
                    key={index}
                  >
                    {instructor.firstName} {instructor.lastName}
                  </option>
                ))}
            </select>
          </div>
          <textarea
            rows="5"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment if Any..."
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Want to recive whatsapp updates?</p>
            <input
              type="checkbox"
              checked={whatsapp}
              onChange={(e) => setWhatsapp(e.target.checked)}
              style={{ flex: "none", width: "25px"}}
            />
          </div>
          <button style={{ margin: "0 auto" }}>CONFIRM SLOT</button>
        </form>
      </div>
    </>
  );
};

export default SlotForm;
