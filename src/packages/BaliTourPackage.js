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
import {
  AccessTime,
  ExpandMore,
} from "@mui/icons-material";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import BookingForm from "../components/BookingForm";
import "./style.css";
import img1 from "../assets/MountBatur.jpg";
import img2 from "../assets/TamanAyunTemple.jpg";
import img3 from "../assets/Ubud.jpg";
import img4 from "../assets/UluwatuTemple.jpg";

const faqs = [
  {
    question: "What is included in the Bali tour package?",
    answer:
      "Accommodation, breakfast, guided tours, local transport, and entrance fees.",
  },
  {
    question: "Are international flights included?",
    answer: "No, flights to/from Bali are not included.",
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

const BaliTourPackage = () => {
  const itinerary = [
    "Day 1 - Morning & Afternoon: Arrive at Denpasar Airport (DPS) and check into your hotel in the Seminyak/Canggu/Uluwatu area. Evening activity: Uluwatu Temple Sunset & Kecak Fire Dance, followed by a seafood dinner on Jimbaran Bay beach.",
    "Day 2 - Morning & Afternoon: Check out and transfer to Ubud. Visit Tegenungan Waterfall on the way. Check into your Ubud accommodation. Evening Activity: Explore Ubud Monkey Forest and enjoy a traditional Balinese dinner near the center of Ubud.",
    "Day 3 - Morning & Afternoon: Morning visit to Tegalalang Rice Terrace for stunning views (and maybe a famous Bali Swing). Evening Activity: Visit Tirta Empul Temple (a sacred water temple) and enjoy a relaxing Balinese massage.",
    "Day 4 - Morning & Afternoon: Drive to the northern area to see the iconic floating Ulun Danu Beratan Temple on Lake Beratan. Evening Activity: Head south for a spectacular sunset view at Tanah Lot Temple (the sea temple).",
    "Day 5 - Morning & Afternoon: Enjoy a final Balinese breakfast and some souvenir shopping. Free time until your airport transfer. Evening Activity: Depart from Denpasar Airport (DPS).",
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
      title: "Majestic Volcanic Sunrise",
      description:
        "Mount Batur offers an unforgettable sunrise trek with panoramic views of the volcanic caldera and serene Lake Batur, perfect for adventure seekers and nature lovers.",
      image: img1,
    },
    {
      id: 2,
      title: "Elegant Royal Temple",
      description:
        "Known for its beautiful traditional Balinese architecture and tranquil gardens, Taman Ayun Temple is a serene spiritual site reflecting Bali's rich cultural heritage.",
      image: img2,
    },
    {
      id: 3,
      title: "Artistic Cultural Hub",
      description:
        "Ubud is Bali's vibrant center for arts, crafts, and traditional dances, surrounded by lush rice terraces and offering a peaceful retreat into Balinese culture.",
      image: img3,
    },
    {
      id: 4,
      title: "Cliffside Sea Temple",
      description:
        "Perched atop dramatic sea cliffs, Uluwatu Temple offers breathtaking ocean views, traditional Kecak fire dances at sunset, and a mystical spiritual ambiance.",
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
            className="bali"
            sx={{ fontFamily: "Georgia", fontWeight: 600, fontSize: "40px" }}
            variant="h4"
          >
            Bali
          </Typography>
          <br />
          <Typography variant="body1" className="description">
            Bali, also known as the "Island of the Gods" is a tropical
            Indonesian island famous for its rich, unique Hindu culture and
            diverse landscapes, including volcanic mountains, lush rice
            terraces, and beautiful beaches. As a top tourist destination, it
            offers a blend of cultural experiences, natural beauty, adventurous
            activities like surfing and diving, vibrant nightlife, and spiritual
            retreats. The island is characterized by its spiritual atmosphere,
            beautiful temples, and a strong connection to nature, reflected in
            its arts, rituals, and offerings.
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
          sx={{ maxWidth: 360, backgroundColor: "#7cc889ff" }}
          className="package-card animated-card"
        >
          <CardContent className="card-content-scroll">
            {/* Scrollable contents here */}
            <Typography
              variant="h5"
              sx={{ fontFamily: "Courier New", fontSize: "50px" }}
              className="card-title"
            >
              Bali
            </Typography>
            <Typography
              sx={{ fontSize: "20px", textAlign: "center" }}
              className="card-item"
            >
              <AccessTime sx={{ color: "#235019ff" }} /> 4 Nights / 5 Days
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
                backgroundColor: "#235019ff",
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

export default BaliTourPackage;
