import React, { useState,useEffect,useRef } from "react";
import CourseRegistration from "../components/CourseSections/courseRegistration";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../contexts/AuthContext";
import { fbapp } from "../firebase";

const RegisterForCourse = ({
  match: {
    params: { id },
  },
}) => {
  const [courses, setCourses] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [price, setPrice] = useState();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { userID, currentUser, updateEmail, updatePassword, updateProfile } = useAuth()
  
  const [isOpen, setIsOpen] = useState(false);

  const [step, setStep] = useState(1);

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  useEffect(() => {
    const db = fbapp.firestore();
    
    var usersRef =  db.collection("students").doc(userID);

    usersRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        setUser(doc.data())
        console.log(user.lastName)
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});


    const fetchCourses = async () => {
      setLoading(true);
      db.collection("courses")
        .doc(id)
        .get()
        .then((querySnapshot) => {
          // Loop through the data and store
          // it in array to display
          var data = querySnapshot.data();
            setCourses(data);
            setPrice(data.price);
          
        });
    };

    const fetchOutline = async () => {
      db.collection("lessons")
        .where("courseId", "==", id)
        .get()
        .then((querySnapshot) => {
          // Loop through the data and store
          // it in array to display
          querySnapshot.forEach((element) => {
            var outline = element.data();
            setLessons((arr) => [...arr, outline]);
          });
          setLoading(false);
        });
    };

    fetchCourses();
    fetchOutline();
  }, [id]);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar
        toggle={toggle}
        navbar={navbar}
        changeBackground={changeBackground}
      />
      <PageHeader id={id} courses={courses}/>
      <CourseRegistration id={id} nextStep={nextStep} courses={courses} lessons={lessons} />
      <Footer />
    </>
  );
};

export default RegisterForCourse;
