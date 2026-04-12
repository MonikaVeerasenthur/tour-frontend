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
import img1 from "../assets/GardensByTheBay.jpg";
import img2 from "../assets/MarinaBaySands.jpg";
import img3 from "../assets/OrchardRoad.jpg";
import img4 from "../assets/SingaporeBotanicGardens.jpg";

const faqs = [
  {
    question: "What is included in the Singapore tour package?",
    answer:
      "Accommodation, breakfast, guided tours, local transport, and entrance fees.",
  },
  {
    question: "Are international flights included?",
    answer: "No, flights to/from Singapore are not included.",
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

const SingaporeTourPackage = () => {
  const itinerary = [
    "Day 1 - Afternoon: Explore Jewel Changi Airport (Shiseido Forest Valley & Rain Vortex) before heading to your accommodation. Late Afternoon: Take photos at the iconic Merlion statue with the stunning Marina Bay Sands backdrop. Evening: Visit the free Supertree Grove area. At night, enjoy the spectacular Garden Rhapsody light and music show (usually 7:45 PM & 8:45 PM). Night: Catch the Spectra Light & Water Show (free) at the waterfront promenade outside MBS. You can also visit the MBS SkyPark Observation Deck for panoramic views.",
    "Day 2 - Afternoon: Explore the cooled conservatories: the Cloud Forest (with the world's tallest indoor waterfall) and the Flower Dome. Lunch: Head to a nearby hawker centre like Lau Pa Sat or Maxwell Food Centre for authentic local cuisine (try Hainanese Chicken Rice or Laksa). Afternoon: Explore the vibrant streets of Chinatown (Buddha Tooth Relic Temple, Sri Mariamman Temple) and Little India (colourful shophouses and temples). Evening: Discover Singapore's Muslim Quarter, with the beautiful Sultan Mosque and the trendy boutiques along Haji Lane.",
    "Day 3 - Morning & Afternoon: Spend the day enjoying the seven themed zones, including attractions like the TRANSFORMERS The Ride and Ancient Egypt. Late Afternoon: Experience a thrilling downhill ride on the Skyline Luge or visit the S.E.A. Aquarium, one of the world's largest. Sunset: Relax at Palawan Beach (where you can walk to the Southernmost Point of Continental Asia) or Siloso Beach. Evening: End your day with the spectacular nighttime show, Wings of Time, a multimedia extravaganza of lights, lasers, and water.",
    "Day 4 - Morning & Afternoon: Visit the renowned Singapore Zoo, famous for its 'open concept' enclosures. You can also explore the adjacent River Wonders (Asia's first and only river-themed wildlife park). Dinner: Have dinner near the wildlife parks before the Night Safari begins. Night: Experience the world's first nocturnal zoo. Take the guided tram ride or explore the walking trails to see over 2,500 animals in their habitats after dark.",
    "Day 5 - Morning: Start the day at this peaceful UNESCO World Heritage Site. Don't miss the beautiful National Orchid Garden. Late Morning: Explore Singapore's famous shopping street, home to luxury malls, department stores, and ice cream pushcarts. Afetrnoon: Enjoy one last delicious Singaporean meal (perhaps Chilli Crab!) before heading to Changi Airport for your flight.",
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
      title: "Futuristic Urban Oasis",
      description: "A stunning 101-hectare nature park featuring iconic Supertrees, the world’s largest glass greenhouse Flower Dome, the Cloud Forest with one of the tallest indoor waterfalls, and a dazzling nightly light show.",
      image: img1,
    },
    {
      id: 2,
      title: "Iconic Waterfront Resort",
      description: "Marina Bay Sands is a luxurious architectural marvel featuring a rooftop infinity pool, a casino, high-end shopping, fine dining, and panoramic city views from its SkyPark.",
      image: img2,
    },
    {
      id: 3,
      title: "Shopping Paradise",
      description: "Singapore’s premier shopping street, lined with vibrant malls, luxury boutiques, and lively dining spots, offering an unmatched retail and entertainment experience.",
      image: img3,
    },
    {
      id: 4,
      title: "UNESCO Heritage Garden",
      description: "A serene tropical garden known for its rich biodiversity, the National Orchid Garden, and tranquil lakes, providing a peaceful escape in the heart of the city.",
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
            className="singapore"
            sx={{ fontFamily: "Georgia", fontWeight: 600, fontSize: "40px" }}
            variant="h4"
          >
            Singapore
          </Typography>
          <br />
          <Typography variant="body1" className="description">
            Singapore is a city-state and island country located at the southern
            tip of the Malay Peninsula, known for its strategic location, urban
            environment, diverse culture, and status as a global financial and
            trade center. Officially the Republic of Singapore, it comprises one
            main island and 63 smaller ones and has English as a common language
            alongside Malay, Mandarin, and Tamil.
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
          sx={{ maxWidth: 360, backgroundColor: "#9bc3ffff" }}
          className="package-card animated-card"
        >
          <CardContent className="card-content-scroll">
            {/* Scrollable contents here */}
            <Typography
              variant="h5"
              sx={{ fontFamily: "Courier New", fontSize: "50px" }}
              className="card-title"
            >
              Singapore
            </Typography>
            <Typography
              sx={{ fontSize: "20px", textAlign: "center" }}
              className="card-item"
            >
              <AccessTime sx={{ color: "#094894ff" }} /> 4 Nights / 5 Days
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
                backgroundColor: "#094894ff",
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

export default SingaporeTourPackage;
