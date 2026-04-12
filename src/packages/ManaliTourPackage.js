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
import img1 from "../assets/RohtangPass.jpg";
import img2 from "../assets/ScenicSolangValley.jpg";
import img3 from "../assets/JoginiWaterfalls.jpg";
import img4 from "../assets/HadimbaTemple.jpg";

const faqs = [
  {
    question: "What is included in the Manali tour package?",
    answer:
      "Accommodation, breakfast, guided tours, local transport, and entrance fees.",
  },
  {
    question: "Are international flights included?",
    answer: "No, flights to/from Manali are not included.",
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

const ManaliTourPackage = () => {
  const itinerary = [
    "Day 1 - Arrival In Manali - Morning/Afternoon : Arrive and check in to your hotel. Old Manali for cafes & vibe, Mall Road for convenience. Freshen up and relax. Evening : Cafe hopping in Old Manali. Try local trout & Himachali dishes.Local Sightseeing : Hadimba Devi Temple : Ancient wooden temple in cedar forest. also called Dhungri or Hidimba Temple, Dhungri Van Vihar approximately 2 km from Mall Road in Manali. Visiting Hours at 8 AM - 6 PM daily. Manu Temple : Peaceful spiritual spot. Near old manali 3 km uphill from Manali town center. Vashisht Temple : The temple is known for its sacred hot water springs and distinctive Himachali architecture. Mall Road : Shopping & local food.",
    "Day 2 - Solang Valley Adventure Day - Distance : 14 km from Manali. Activities (seasonal) : Paragliding, ATV rides, Zip lining, Snow activities (winter), Cable car ride. Evening : Return to Manali. Relax or enjoy live music cafes in Old Manali.",
    "Day 3 - Rohtang Pass/Atal Tunnel/Sissu - Option 1 : Rohtang Pass (Summer) Snow views, glaciers, scenic photography. Option 2 : Atal Tunnel + Sissu (All-weather option) Drive through the iconic Atal Tunnel. Visit Sissun waterfall. Riverside relaxation.",
    "Day 4 - Kasol& Manikaran Day Trip - Distance : ~75 km (3 - 4 hrs one way). Parvati : River views. Manikaran Sahib : Famous for Hot sulphur springs, langar, Hindu and Sikh Temples. Near kasol and kullu. 24 Hours visiting and entry for free. Explore : Kasol cafes & short riverside walks. Naggar : Famous for Naggar Castle and Art Gallery. Nearby city in manali approximately 20 km away. Jana Waterfall : surrounded by deodar forests, apple orchards, terraced fields, it offers a tranquil country side retreat in the foot hills of the pir panjal range. Jana village near Naggar in Kullu. Distance from Manali in approximately 33 km. March - October is best time to visit the place. Activities : Short trek, Photography, Village Walks and Local Himachali Food.",
    "Day 5 - Nature & Departure - Morning : walk by the Beas River. Visit Jogini Falls (easy trek) : Entry fees is free.visiting at 6 Am to 6 pm. Best time to visit in march - june and September - October. Breakfast & departure.",
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
      title: "Gateway to the High Himalayas",
      description:
        "Rohtang Pass is a high mountain pass in the Pir Panjal range, connecting Manali to the Lahaul and Spiti valleys in Himachal Pradesh. At over 13,000 feet, it offers dramatic views of snow‑covered peaks, deep valleys, and frozen streams all year round.",
      image: img1,
    },
    {
      id: 2,
      title: "Manali's Adventure Playground",
      description:
        "Scenic Solang Valley is a stunning Himalayan valley near Manali, framed by snow‑capped peaks, pine forests, and open meadows. Famous for paragliding, zorbing, skiing, and snow‑filled winter sports, it blends thrilling activities with breathtaking mountain views.",
      image: img2,
    },
    {
      id: 3,
      title: "Manali's Hidden Waterfall Gem",
      description:
        "Jogini Waterfalls is a serene cascade near Vashisht village in Manali, where water thunders down rocky cliffs into a clear pool below. Reached by a scenic short trek through apple orchards and pine forests, it feels like a quiet escape from the busy town.",
      image: img3,
    },
    {
      id: 4,
      title: "Manali's Ancient Forest Shrine",
      description:
        "The Hadimba Temple is a unique wooden temple nestled in the woods of Manali, dedicated to the goddess Hadimba, wife of the Pandava Bhima. With its pagoda‑style roof, carved wooden pillars, and serene natural surroundings, it feels like a peaceful spiritual hideaway in the hills.",
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
            Manali
          </Typography>
          <br />
          <Typography variant="body1" className="description">
            Manali is a charming hill town in Himachal Pradesh, nestled in the
            lap of the snow-capped Pir Panjal and Dhauladhar ranges along the
            Beas River. Famous for its cool summers, snowy winters, and
            adventure activities like skiing, paragliding, and trekking, it
            attracts both families and thrill-seekers. From the ancient Hadimba
            Temple and Old Manali's hippie cafés to Solang Valley's sweeping
            views, Manali offers a perfect blend of nature, culture, and
            leisure.
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
          sx={{ maxWidth: 360, backgroundColor: "#36B1C7" }}
          className="package-card animated-card"
        >
          <CardContent className="card-content-scroll">
            {/* Scrollable contents here */}
            <Typography
              variant="h5"
              sx={{ fontFamily: "Courier New", fontSize: "50px" }}
              className="card-title"
            >
              Manali
            </Typography>
            <Typography
              sx={{ fontSize: "20px", textAlign: "center" }}
              className="card-item"
            >
              <AccessTime sx={{ color: "#960B33" }} /> 4 Nights / 5 Days
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
                backgroundColor: "#960B33",
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

export default ManaliTourPackage;
