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
import img1 from "../assets/DakshinMukhiHanumanTemple.webp";
import img2 from "../assets/SaiHeritageVillage.webp";
import img3 from "../assets/SaiTeerthThemePark.webp";
import img4 from "../assets/WetnJoyWaterPark.webp";

const faqs = [
  {
    question: "What is included in the Shiradi tour package?",
    answer:
      "Accommodation, breakfast, guided tours, local transport, and entrance fees.",
  },
  {
    question: "Are international flights included?",
    answer: "No, flights to/from Shiradi are not included.",
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

const ShiradiTourPackage = () => {
  const itinerary = [
    "Day 1 - Morning: Arrive at Shirdi Airport (SAG) or the nearest station (Kopergaon/Manmad). Check into your hotel and relax. Afetrnoon: Get your first Darshan of Shri Sai Baba at the Samadhi Mandir. Allocate ample time as the queue can be long. Evening: Visit the sites where Sai Baba spent his time: Dwarkamai (the mosque where he lived), Chavadi (where he slept on alternate nights), and Gurusthan (where he was first seen under the Neem tree). Night: Attend the Sheja Aarti (night Aarti, usually around 10:00 PM) at the Samadhi Mandir.",
    "Day 2 - Morning: Attend the Kakad Aarti (morning Aarti, usually 4:30 AM) for a serene spiritual start. Later, visit the Khandoba Mandir (the temple dedicated to Khandoba, who welcomed Sai Baba to Shirdi). Afternoon: Visit the Dixit Wada Museum (displays Sai Baba's personal belongings) and Lendi Baug (the garden where Sai Baba used to water plants and meditate). Late Afternoon: Visit the Sai Heritage Village for a picnic-style area with statues depicting Sai Baba's life, or the nearby Wet N Joy Water Park (if travelling with family/children). Evening: If today is Thursday, do not miss the Palki Procession from Dwarkamai to Chavadi.",
    "Day 3 - Morning: Drive to Shani Shingnapur (approx. 72 km/2 hrs). Take Darshan at the unique open-air temple dedicated to Lord Shani. Afternoon: Drive to Grishneshwar Jyotirlinga Temple (approx. 135 km from Shirdi, 60 km from Shani Shingnapur). It is one of the 12 sacred Jyotirlingas of Lord Shiva. Late Afternoon: Visit the magnificent Ellora Caves (a UNESCO World Heritage Site) located very close to Grishneshwar. Explore the rock-cut architecture, including the famous Kailasa Temple (Cave 16). (Note: Ellora Caves are Closed on Tuesdays) Evening: Drive back to your hotel in Shirdi (approx. 110 km from Ellora Caves).",
    "Day 4 - Morning: Drive to Trimbakeshwar Temple (approx. 120 km/3 hrs). This is another of the 12 Jyotirlingas and the source of the Godavari River. Afetrnoon: Visit the Kalaram Temple and Sita Gufa in the Panchavati area of Nashik, a place of immense mythological significance in the Ramayana. Late Afternoon: Visit the Muktidham Temple near Nashik Road, a modern architectural marvel featuring copies of all 12 Jyotirlingas. Evening: Drive back to your hotel in Shirdi.",
    "Day 5 - Morning: Have a quick final Darshan at the Sai Baba Mandir. Spend time shopping for souvenirs (Sai Baba idols, religious books, etc.) at the local markets. Noon: Check out from the hotel and proceed to Shirdi Airport, Kopergaon, Manmad, or onward destination.",
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
      title: "Powerful South-Facing Hanuman",
      description: "A revered temple in Shirdi featuring a unique south-facing idol of Lord Hanuman, believed to offer protection and spiritual strength. It holds deep connections to Sai Baba and is a center of devotion and miracles.",
      image: img1,
    },
    {
      id: 2,
      title: "Cultural Journey through Sai",
      description: "Sai Heritage Village showcases traditional art, culture, and spirituality inspired by Sai Baba’s legacy, offering visitors immersive experiences of local heritage and devotion.",
      image: img2,
    },
    {
      id: 3,
      title: "Spiritual Amusement Experience",
      description: "A vibrant theme park blending recreation with devotion, featuring rides, attractions, and spiritual exhibits dedicated to Sai Baba, designed for family-friendly entertainment.",
      image: img3,
    },
    {
      id: 4,
      title: "Family Fun Splash Zone",
      description: "Wetnjoy is a lively water park known for thrilling slides, pools, and entertainment suitable for all ages, providing a refreshing break in the Shiradi region.",
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
            className="shiradi"
            sx={{ fontFamily: "Georgia", fontWeight: 600, fontSize: "40px" }}
            variant="h4"
          >
            Shiradi
          </Typography>
          <br />
          <Typography variant="body1" className="description">
            Shirdi is a significant pilgrimage town in Maharashtra, India,
            renowned as the former home and resting place of Shirdi Sai Baba, a
            highly revered spiritual leader considered a saint by both Hindu and
            Muslim devotees. The town is centered around the large temple
            complex dedicated to Sai Baba, which includes his tomb (Samadhi
            Mandir), the Dwarkamai Mosque where he lived, and the Chavadi where
            he rested.
          </Typography>
          <div className="stepper-container">
            <Stepper activeStep={activeStep} alternativeLabel>
              {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"].map((label, i) => (
                <Step key={i} onClick={() => setActiveStep(i)}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <br />
            <Typography align="center" className="step-content">
              {itinerary[activeStep]}
            </Typography>
          </div>
        </div>

        {/* Card with details */}
        <Card
          sx={{ maxWidth: 360, backgroundColor: "#cedd6cff" }}
          className="package-card animated-card"
        >
          <CardContent className="card-content-scroll">
            {/* Scrollable contents here */}
            <Typography
              variant="h5"
              sx={{ fontFamily: "Courier New", fontSize: "50px" }}
              className="card-title"
            >
              Shiradi
            </Typography>
            <Typography
              sx={{ fontSize: "20px", textAlign: "center" }}
              className="card-item"
            >
              <AccessTime sx={{ color: "#68651fff" }} /> 4 Nights / 5 Days
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
                backgroundColor: "#68651fff",
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

export default ShiradiTourPackage;
