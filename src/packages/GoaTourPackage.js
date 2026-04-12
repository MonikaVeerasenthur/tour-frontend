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
import img1 from "../assets/AguadaFort.jpg";
import img2 from "../assets/PalolemBeach.jpg";
import img3 from "../assets/VagatorBeach.jpg";
import img4 from "../assets/DudhsagarWaterfalls.jpg";

const faqs = [
  {
    question: "What is included in the Goa tour package?",
    answer:
      "Accommodation, breakfast, guided tours, local transport, and entrance fees.",
  },
  {
    question: "Are international flights included?",
    answer: "No, flights to/from Goa are not included.",
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

const GoaTourPackage = () => {
  const itinerary = [
    "Day 1 - Arrival & Check-in: Arrive at Dabolim Airport (GOI) or Mopa Airport (GOX) and transfer to your hotel/resort in North Goa (e.g., Calangute, Baga, Candolim). Afternoon: Relax at Candolim Beach or Baga Beach. Evening: Experience the famous North Goa Nightlife at Tito's Lane or a lively beach shack.",
    "Day 2 - Morning: Visit the iconic Fort Aguada for stunning coastal views. Late Morning: Head to Calangute Beach or Baga for Water Sports (parasailing, jet ski, banana boat ride). Afternoon: Explore the ruins of Chapora Fort (famous from the movie Dil Chahta Hai) for sunset views over Vagator Beach.",
    "Day 3 - Morning: Drive to Old Goa (near Panjim, the capital). Visit UNESCO World Heritage Sites: Basilica of Bom Jesus and Se Cathedral. Afternoon: Explore Fontainhas, the charming Latin Quarter of Panjim, known for its colorful Portuguese houses. Evening: Enjoy a relaxing Sunset Cruise on the Mandovi River with music and local dances.",
    "Day 4 - Full Day Trip to South Goa. Morning: Visit the secluded and picturesque Palolem Beach (known for its calm waters and Silent Noise Parties). Afternoon: Head to Agonda Beach or Colva Beach for a peaceful, sunbathing experience. Alternatively: Visit the majestic Dudhsagar Waterfalls (requires a half-day jeep safari).",
    "Day 5 - Morning: Enjoy a leisurely breakfast or a final beach walk. Optional: Visit the famous Anjuna Flea Market (Wednesday only) or Mapusa Market. Late Morning/Afternoon: Transfer to the airport or railway station for your onward journey.",
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
      title: "Historic Coastal Fortress",
      description: "Aguada Fort stands as a majestic 17th-century Portuguese stronghold overlooking the Arabian Sea, offering panoramic views and a glimpse into Goa’s colonial past.",
      image: img1,
    },
    {
      id: 2,
      title: "Tranquil Crescent Cove",
      description: "Known for its serene crescent-shaped shore, Palolem Beach captivates with calm waters, vibrant shacks, and a relaxed bohemian vibe ideal for unwinding.",
      image: img2,
    },
    {
      id: 3,
      title: "Dramatic Cliffside Views",
      description: "Vagator Beach features rugged cliffs and striking rock formations alongside golden sands, making it a hotspot for scenic sunsets and beach parties.",
      image: img3,
    },
    {
      id: 4,
      title: "Spectacular Milky Cascade",
      description: "Dudhsagar Waterfalls, one of India’s tallest, dazzles with its milky white torrents amidst lush greenery, offering a refreshing nature escape and trekking adventure.",
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
            className="goa"
            sx={{ fontFamily: "Georgia", fontWeight: 600, fontSize: "40px" }}
            variant="h4"
          >
            Goa
          </Typography>
          <br />
          <Typography variant="body1" className="description">
            About Goa: Tourism, Industries, Economy, Growth & Geography ...Goa
            is India's smallest coastal state, renowned for its stunning
            beaches, rich Portuguese colonial heritage, bustling nightlife, and
            vibrant festivals. The state offers a unique blend of lively tourist
            hubs like North Goa's bustling beaches and the more serene
            landscapes of South Goa, along with cultural sites including
            historic forts, temples, and churches. With a tropical climate, Goa
            provides a diverse array of attractions, from water sports and
            adventure to relaxing in the laid-back "susegad" lifestyle, making
            it a popular tourist destination in India.
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
          sx={{ maxWidth: 360, backgroundColor: "#DAA06D" }}
          className="package-card animated-card"
        >
          <CardContent className="card-content-scroll">
            {/* Scrollable contents here */}
            <Typography
              variant="h5"
              sx={{ fontFamily: "Courier New", fontSize: "50px" }}
              className="card-title"
            >
              Goa
            </Typography>
            <Typography
              sx={{ fontSize: "20px", textAlign: "center" }}
              className="card-item"
            >
              <AccessTime sx={{ color: "#6E260E" }} /> 4 Nights / 5 Days
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
                backgroundColor: "#6E260E",
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

export default GoaTourPackage;
