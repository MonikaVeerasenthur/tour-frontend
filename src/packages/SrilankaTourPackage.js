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
import img1 from "../assets/DambullaCaveTemples.jpg";
import img2 from "../assets/Galle.jpg";
import img3 from "../assets/Kandy.jpg";
import img4 from "../assets/SigiriyaRockFortress.jpg";

const faqs = [
  {
    question: "What is included in the Srilanka tour package?",
    answer:
      "Accommodation, breakfast, guided tours, local transport, and entrance fees.",
  },
  {
    question: "Are international flights included?",
    answer: "No, flights to/from Srilanka are not included.",
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

const SrilankaTourPackage = () => {
  const itinerary = [
    "Day 1 - Culture & Elephants: Upon arrival, meet your driver and head to Kandy. Optional stop: Visit the Pinnawala Elephant Orphanage en route to see the elephants bathing in the river. In the evening, visit the sacred Temple of the Sacred Tooth Relic and enjoy a traditional Kandyan Cultural Show.",
    "Day 2 - Tea Country & Scenery: After visiting the Royal Botanical Gardens in Kandy, take the scenic drive to the Hill Country. Stop at the stunning Ramboda Falls and visit a Tea Factory to learn about the Ceylon tea process and enjoy a tasting. Explore Nuwara Eliya, often called 'Little England.'",
    "Day 3 - Coast & Adventure: Drive from the cool highlands to the sunny South Coast. Head to Bentota, a popular coastal town. Spend the afternoon relaxing on the beach, or indulge in water sports like jet-skiing and parasailing.",
    "Day 4 - History & City: In the morning, take a peaceful Madu River boat safari through the mangroves and visit a nearby Turtle Hatchery. In the afternoon, visit the historic Galle Fort (a UNESCO World Heritage Site) for a walk along the ramparts and some boutique shopping, before transferring back to Colombo.",
    "Day 5 - City & Shopping: Take a short city tour of Colombo, visiting sites like the Gangaramaya Temple, Independence Square, and the colonial-era Old Parliament Building. Enjoy some last-minute souvenir shopping before being transferred to the airport for your departure.",
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
      title: "Ancient Buddhist Rock Sanctuary",
      description: "A UNESCO World Heritage site, this vast cave temple complex dates back to the 1st century BC and features over 150 Buddha statues and vibrant murals painted inside five massive caves carved into a towering rock outcrop.",
      image: img1,
    },
    {
      id: 2,
      title: "Historic Colonial Fort Town",
      description: "Galle is a charming coastal city known for its well-preserved Dutch Fort, colonial-era architecture, quaint streets, and vibrant markets, blending history with seaside charm.",
      image: img2,
    },
    {
      id: 3,
      title: "Spiritual Hill City",
      description: "Nestled amidst lush hills, Kandy is Sri Lanka’s cultural heart, famed for the Temple of the Tooth Relic, serene lake, traditional dance performances, and rich heritage.",
      image: img3,
    },
    {
      id: 4,
      title: "Ancient Royal Citadel",
      description: "Sigiriya is an iconic ancient rock fortress rising 200 meters above the jungle, known for its elaborate frescoes, water gardens, and impressive engineering as a royal palace and fortress.",
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
            className="srilanka"
            sx={{ fontFamily: "Georgia", fontWeight: 600, fontSize: "40px" }}
            variant="h4"
          >
            Srilanka
          </Typography>
          <br />
          <Typography variant="body1" className="description">
            Sri Lanka is a tropical island nation in the Indian Ocean, southeast
            of India, known for its diverse geography, including sandy beaches,
            tea plantations, and mountains, as well as a rich history, diverse
            culture, and wildlife reserves. It is a unitary parliamentary
            constitutional republic with Sri Jayawardenepura Kotte as its
            legislative capital and Colombo as its executive and judicial
            capital. The island is the former territory of Ceylon and is
            separated from India by the Palk Strait.
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
          sx={{ maxWidth: 360, backgroundColor: "#f5f497ff" }}
          className="package-card animated-card"
        >
          <CardContent className="card-content-scroll">
            {/* Scrollable contents here */}
            <Typography
              variant="h5"
              sx={{ fontFamily: "Courier New", fontSize: "50px" }}
              className="card-title"
            >
              Srilanka
            </Typography>
            <Typography
              sx={{ fontSize: "20px", textAlign: "center" }}
              className="card-item"
            >
              <AccessTime sx={{ color: "#f9a135ff" }} /> 4 Nights / 5 Days
            </Typography>
            {/* <Typography
              sx={{ fontSize: "18px", textAlign: "center" }}
              className="card-item"
            >
              <CurrencyRupee sx={{ color: "#b08f5a" }} /> 6000 Per Person
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
                backgroundColor: "#f9a135ff",
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

export default SrilankaTourPackage;
