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
import img1 from "../assets/ChidiyaTapu.avif";
import img2 from "../assets/ElephantBeach.webp";
import img3 from "../assets/JollyBuoyIsland.jpg";
import img4 from "../assets/RadhanagarBeach.png";

const faqs = [
  {
    question: "What is included in the Andaman tour package?",
    answer:
      "Accommodation, breakfast, guided tours, local transport, and entrance fees.",
  },
  {
    question: "Are international flights included?",
    answer: "No, flights to/from Andaman are not included.",
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

const AndamanTourPackage = () => {
  const itinerary = [
    "Day 1 - Arrival: Arrive at Veer Savarkar International Airport (Port Blair). Check into your hotel. Afternoon: Visit the historic Cellular Jail (Kala Pani). Evening: Attend the emotional Light & Sound Show at the Cellular Jail, which narrates the story of the Indian freedom struggle.",
    "Day 2 - Morning: Take a high-speed ferry to Havelock Island (Swaraj Dweep). Afternoon: Check into your resort. Late Afternoon/Sunset: Visit Radhanagar Beach, often ranked among Asia's best beaches. Enjoy the white sands and the beautiful sunset.",
    "Day 3 - Morning: Head to Elephant Beach. This is the prime spot for water sports like snorkeling, sea walking, or glass-bottom boat rides (activities are optional and paid locally). Afternoon: Take a ferry from Havelock to Neil Island (Shaheed Dweep). Evening: Visit Laxmanpur Beach to witness a breathtaking sunset.",
    "Day 4 - Morning: Visit Bharatpur Beach (known for coral and water sports) and the Natural Rock Formation (often called Howrah Bridge). Afternoon: Take a ferry back to Port Blair. Evening: Head to Chidiyatapu (Munda Pahar Beach) for one last spectacular island sunset view.",
    "Day 5 - Depending on your flight time, you can visit a local market for souvenir shopping or visit the Chatham Saw Mill (one of Asia's oldest) before transferring to the Port Blair Airport for your departure.",
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
      title: "Serene Sunset Escape",
      description:
        "Famous for its breathtaking sunsets, dense mangrove forests, and rich birdlife, Chidiyatapu offers a peaceful retreat with scenic forest drives and a tranquil shoreline perfect for nature lovers.",
      image: img1,
    },
    {
      id: 2,
      title: "Vibrant Coral Snorkeling",
      description:
        "Known for crystal-clear waters and vibrant coral reefs, Elephant Beach is ideal for snorkeling and underwater adventures, offering a colorful marine world rich with tropical fish and corals.",
      image: img2,
    },
    {
      id: 3,
      title: "Pristine Marine Sanctuary",
      description:
        "A protected island celebrated for its stunning coral reefs and crystal-clear waters, Jolly Buoy Island is perfect for snorkeling and exploring diverse marine life in a serene environment.",
      image: img3,
    },
    {
      id: 4,
      title: "Pristine Tropical Paradise",
      description:
        "Renowned for its powdery white sands and turquoise waters, Radhanagar Beach on Havelock Island is a picturesque tropical haven perfect for relaxation and stunning sunset views.",
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
            className="andaman"
            sx={{ fontFamily: "Georgia", fontWeight: 600, fontSize: "40px" }}
            variant="h4"
          >
            Andaman
          </Typography>
          <br />
          <Typography variant="body1" className="description">
            The Andaman Islands, located in the Bay of Bengal, are a group of
            islands forming an archipelago with white sandy beaches, clear
            waters, and vibrant coral reefs. Known for their natural beauty and
            tropical, humid climate, the islands offer opportunities for
            adventure sports and are home to ancient rainforests. The area's
            population includes indigenous tribes and settlers from mainland
            India, contributing to a unique blend of cultures.
          </Typography>
          {/* Stepper instead of dropdown */}
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
          sx={{ maxWidth: 360, backgroundColor: "#9d8eb8ff" }}
          className="package-card animated-card"
        >
          <CardContent className="card-content-scroll">
            {/* Scrollable contents here */}
            <Typography
              variant="h5"
              sx={{ fontFamily: "Courier New", fontSize: "50px" }}
              className="card-title"
            >
              Andaman
            </Typography>
            <Typography
              sx={{ fontSize: "20px", textAlign: "center" }}
              className="card-item"
            >
              <AccessTime sx={{ color: "#2b1538ff" }} /> 4 Nights / 5 Days
            </Typography>
            {/* <Typography
              sx={{ fontSize: "18px", textAlign: "center" }}
              className="card-item"
            >
              <CurrencyRupee sx={{ color: "#b08f5a" }} /> 10000 Per Person
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
                backgroundColor: "#2b1538ff",
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
            backgroundImage: "radial-gradient(navy, #b08f5a, #fff)",
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

export default AndamanTourPackage;