import SlotForm from "../components/SlotForm";
import Hero from "../components/Hero";

const Slot = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Demo Class | Plus education Institute"}
        imageUrl={
          "stock-photo-calendar-with-magnifying-glass-isolated-on-white-background-d-illustration-737387413-removebg-preview.png"
        }
        p={
          "Ready to experience the Plus difference? Don’t miss out on the chance to join our exclusive demo class and get a firsthand look at our engaging, interactive approach to learning! Choose a slot that fits your schedule, and discover how our expert-led sessions, personalized guidance, and hands-on activities can accelerate your path to success"
        }
      />
      <SlotForm />
    </>
  );
};

export default Slot;
