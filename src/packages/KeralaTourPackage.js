import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  Drawer,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import { AccessTime, ExpandMore } from "@mui/icons-material";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import BookingForm from "../components/BookingForm";
import "./style.css";
import img1 from "../assets/Alleppey.jpg";
import img2 from "../assets/Kottayam.jpg";
import img3 from "../assets/Munnar.jpg";
import img4 from "../assets/Vagamon.jpg";

const faqs = [
  {
    question: "What is included in the Kerala tour package?",
    answer:
      "Accommodation, breakfast, guided tours, local transport, and entrance fees.",
  },
  {
    question: "Are international flights included?",
    answer: "No, flights to/from Kerala are not included.",
  },
  {
    question: "Can I customize my package?",
    answer: "Yes, please contact support to customize.",
  },
  {
    question: "Is the tour family-friendly?",
    answer: "Yes, kid-friendly activities are included.",
  },
];

const KeralaTourPackage = () => {
  const itinerary = [
    "Day 1 - Arrive at Cochin (Kochi) Airport or Railway Station and transfer to the misty hill station of Munnar. Enjoy the scenic drive passing the Cheeyappara and Valara Waterfalls and the lush spice and tea plantations. Check into your hotel.",
    "Day 2 - Explore the area's natural beauty: Eravikulam National Park (home to the Nilgiri Tahr), Mattupetty Dam (for beautiful reservoir views), Echo Point, and the Tea Museum (to learn about tea processing).",
    "Day 3 - After breakfast, drive to Thekkady, the gateway to the famous Periyar National Park. In the afternoon, check in and then proceed for a Spice Plantation Tour to see and learn about cardamom, pepper, and cinnamon. In the evening, consider watching a Kathakali or Kerala Martial Arts (Kalaripayattu) performance.",
    "Day 4 - Head to the backwater paradise of Alleppey (Alappuzha). Check in to a traditional Kerala Houseboat by noon for an all-inclusive overnight cruise. Enjoy cruising through the tranquil canals, paddy fields, and villages, witnessing local life along the backwaters. Lunch, dinner, and breakfast will be served on board.",
    "Day 5 - After an early morning cruise and breakfast on the houseboat, check out around 9:00 AM. You will then be transferred back to the Cochin International Airport or Railway Station for your departure, carrying unforgettable memories of Kerala.",
  ];

  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
  };

  const nextSlide = () => {
    setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
  };

  const slides = [
    {
      id: 1,
      title: "Serene Backwater Haven",
      description: "Alleppey is famed for its tranquil backwaters and traditional houseboat cruises, offering a peaceful journey through lush green waterways and village life.",
      image: img1,
    },
    {
      id: 2,
      title: "Cultural and Literary Hub",
      description: "Kottayam, known as the “Land of Letters,” features vibrant cultural heritage, scenic landscapes, and proximity to the Vembanad Lake, perfect for a blend of tradition and nature.",
      image: img2,
    },
    {
      id: 3,
      title: "Misty Tea Gardens",
      description: "Munnar enchants with rolling tea plantations, cool mountain air, and picturesque hills, making it a must-visit for nature lovers and tea enthusiasts.",
      image: img3,
    },
    {
      id: 4,
      title: "Untouched Hill Station",
      description: "Vagamon offers calm hills, verdant meadows, and pine forests, ideal for trekking, paragliding, and peaceful escapes into nature’s lap.",
      image: img4,
    },
  ];

  return (
    <div className="itinerary-container">
      <div className="fullwidth-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === activeIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="caption">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}

        <button
          className="nav prev"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          &#10094;
        </button>
        <button
          className="nav next"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          &#10095;
        </button>
      </div>
      {/* Package Information */}
      <div className="body-section">
        <div className="info-section">
          <Typography
            className="kerala"
            sx={{ fontFamily: "Georgia", fontWeight: 600, fontSize: "40px" }}
            variant="h4"
          >
            Kerala
          </Typography>
          <br />
          <Typography variant="body1" className="description">
            Kerala is a state in southwest India renowned as "God's Own Country"
            for its picturesque landscapes of lush green hills, serene
            backwaters, and pristine beaches, bordered by the Arabian Sea to the
            west and the Western Ghats mountains to the east. It is a major
            global tourist destination, known for its unique cultural heritage,
            Ayurvedic treatments, and festivals like Onam. The state also boasts
            a highly advanced and peaceful society with 100% literacy and
            world-class healthcare, making it a model for progress and
            responsible tourism. Geography and Topography Location: Situated at
            the southwestern tip of the Indian subcontinent. Borders: Bounded by
            the Arabian Sea to the west and the Western Ghats mountain range to
            the east.
          </Typography>
          <div className="stepper-container">
            <Stepper activeStep={activeStep} alternativeLabel>
              {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"].map((label, i) => (
                <Step key={i} onClick={() => setActiveStep(i)}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>{" "}
            <br />
            <Typography align="center" className="step-content">
              {itinerary[activeStep]}
            </Typography>
          </div>
        </div>

        {/* Card with details */}
        <Card
          sx={{ maxWidth: 360, backgroundColor: "#a2ab58" }}
          className="package-card animated-card"
        >
          <CardContent className="card-content-scroll">
            {/* Scrollable contents here */}
            <Typography
              variant="h5"
              sx={{ fontFamily: "Courier New", fontSize: "50px" }}
              className="card-title"
            >
              Kerala
            </Typography>
            <Typography
              sx={{ fontSize: "20px", textAlign: "center" }}
              className="card-item"
            >
              <AccessTime sx={{ color: "#636363" }} /> 4 Nights / 5 Days
            </Typography>
            {/* <Typography
              sx={{ fontSize: "18px", textAlign: "center" }}
              className="card-item"
            >
              <CurrencyRupee sx={{ color: "#b08f5a" }} /> 20000 Per Person
            </Typography> */}
            <Typography
              sx={{ fontSize: "18px", textAlign: "center" }}
              className="card-item"
            >
              ⭐⭐⭐⭐☆
            </Typography>
            <br />
            <Button
              sx={{
                marginLeft: "25%",
                borderRadius: "20px",
                backgroundColor: "#636363",
              }}
              variant="contained"
              onClick={() => setOpenDrawer(true)}
            >
              Book This Tour
            </Button>
          </CardContent>
        </Card>
        <div
          className="stepper-container"
          style={{
            backgroundImage: "radial-gradient(navy, #b08f5a, white)",
            borderRadius: "40px",
            marginRight: "100px",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              mb: 4,
              mt: 2,
            }}
          >
            <Card
              sx={{
                borderRadius: "30px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontFamily: "Courier New" }}
                >
                  Inclusions
                </Typography>
                <ul>
                  <FlightIcon />
                  &nbsp; Airport Transfers in private basis. <br />
                  <FlightIcon />
                  &nbsp; 04 Nights hotel accommodation in 3 star hotel. <br />
                  <FlightIcon />
                  &nbsp; 05 days breakfast at hotel. <br />
                  <FlightIcon />
                  &nbsp; Entry Tickets. <br />
                  <FlightIcon />
                  &nbsp; City Tour sightseeing. <br />
                </ul>
              </CardContent>
            </Card>
            <Card sx={{ borderRadius: "30px" }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontFamily: "Courier New" }}
                >
                  Exclusions
                </Typography>
                <ul>
                  <FlightIcon />
                  &nbsp; All personal expenses like shopping, beverages, phone
                  bill, laundry etc. <br />
                  <FlightIcon />
                  &nbsp; Meals and services, unless specified in the itinerary
                  are not included. <br />
                  <FlightIcon />
                  &nbsp; Anything not mentioned in 'Package includes'. <br />
                  <FlightIcon />
                  &nbsp; Early Check-in & Late check-out charges. <br />
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </div>
        <Box
          sx={{
            mt: 5,
            backgroundColor: "#b08f5a",
            p: 3,
            borderRadius: 5,
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontFamily: "revert", fontSize: "30px", fontWeight: "bold" }}
            variant="h5"
            gutterBottom
          >
            Frequently Asked Questions
          </Typography>
          <br />
          {faqs.map((faq, i) => (
            <Accordion key={i} sx={{ mb: 1 }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <AirplaneTicketIcon />
                &nbsp;&nbsp;
                <Typography fontWeight={600}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="#555">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </div>

      {/* Drawer with booking form */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <BookingForm onClose={() => setOpenDrawer(false)} />
      </Drawer>
    </div>
  );
};

export default KeralaTourPackage;
