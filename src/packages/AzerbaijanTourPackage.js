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
import FlightIcon from '@mui/icons-material/Flight';
import { AccessTime, ExpandMore } from "@mui/icons-material";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import BookingForm from "../components/BookingForm";
import "./style.css";
import img1 from "../assets/PalaceOfTheShirvanshahs.jpg";
import img2 from "../assets/FlameTower.jpg";
import img3 from "../assets/Baku.jpg";
import img4 from "../assets/QizQalasi.jpg";

const faqs = [
  {
    question: "What is included in the Azerbaijan tour package?",
    answer:
      "Accommodation, breakfast, guided tours, local transport, and entrance fees.",
  },
  {
    question: "Are international flights included?",
    answer: "No, flights to/from Azerbaijan are not included.",
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

const AzerbaijanTourPackage = () => {
  const itinerary = [
    "Day 1 - Arrival In Baku - Transfer to your hotel and enjoy a panoramic evening tour of the Flame Towers and Highland Park for the best city views.",
    "Day 2 - Old City & Modern Baku - Explore the UNESCO-listed Icherisheher (Old City), including the Maiden Tower and Shirvanshahs' Palace. In the afternoon, visit the Zaha Hadid-designed Heydar Aliyev Center and the 'I Love Baku' sign.",
    "Day 3 - Gobustan & Mud Volcanoes - Take a day trip to Gobustan National Park to see 40,000-year-old rock petroglyphs and visit the nearby Mud Volcanoes. On the way back, stop at the Bibi-Heybat Mosque and the world's first industrial oil well.",
    "Day 4 - Absheron Peninsula (Fire Tour) - Discover the Ateshgah Fire Temple, once a pilgrimage site for Zoroastrians, and Yanar Dag (Burning Mountain), where natural gas has kept a hillside ablaze for centuries.",
    "Day 5 - Gabala Nature Retreat - Journey to the mountains to visit Nohur Lake and the Tufandag Mountain Resort. Enjoy a cable car ride for breathtaking views of the Greater Caucasus.",
    "Day 6 - Shopping & Departure - Spend your final morning at Nizami Street or local bazaars like the Green Market before transferring to Heydar Aliyev International Airport.",
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
      title: "Baku's Royal Heritage",
      description:
        "The Palace of the Shirvanshahs is a 15th-century royal complex in Baku's Old City, built by the Shirvanshah dynasty. It is considered one of Azerbaijan's finest architectural treasures and part of a UNESCO-listed historic center. The ensemble includes the main palace, mosque, mausoleum, and bathhouse, reflecting rich medieval Islamic design.",
      image: img1,
    },
    {
      id: 2,
      title: "Baku's Modern Marvels",
      description:
        "The Flame Towers are three striking skyscrapers in Baku, designed to resemble leaping flames across the city skyline. They house a luxury hotel, premium apartments, offices, and an observation deck offering panoramic views of the Caspian Sea",
      image: img2,
    },
    {
      id: 3,
      title: "Jewel of the Caspian",
      description:
        "Baku is the vibrant capital of Azerbaijan, nestled along the western shore of the Caspian Sea. It blends ancient walled Old City streets with modern towers, parks, and bustling promenades.As a cultural and economic hub, Baku offers history, architecture, and lively city life in one dynamic destination.",
      image: img3,
    },
    {
      id: 4,
      title: "Maiden Tower of Baku",
      description:
        "Qiz Qalasi, or the Maiden Tower, is a mysterious medieval stone tower standing in Baku's Old City by the Caspian Sea. Built centuries ago, it features a mix of defensive architecture and unique decorative stonework. Surrounded by legends and history, it remains one of Azerbaijan's most iconic landmarks.",
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
            Azerbaijan
          </Typography>
          <br />
          <Typography variant="body1" className="description">
            Azerbaijan is a country straddling Eastern Europe and Western Asia,
            with the Caspian Sea to the east and the Caucasus Mountains to the
            north. Known as "The Land of Fire" it is famous for natural gas
            flames, ancient petroglyphs, and a rich blend of Persian, Turkic,
            and Caucasian cultures. From Baku's modern skyline to mountain
            villages and historic caravanserais, Azerbaijan offers history,
            hospitality, and striking natural beauty.
          </Typography>
          {/* Stepper instead of dropdown */}
          <div className="stepper-container">
            <Stepper activeStep={activeStep} alternativeLabel>
              {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"].map(
                (label, i) => (
                  <Step key={i} onClick={() => setActiveStep(i)}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ),
              )}
            </Stepper>
            <br />
            <Typography align="center" className="step-content">
              {itinerary[activeStep]}
            </Typography>
          </div>
        </div>

        {/* Card with details */}
        <Card
          sx={{ maxWidth: 360, backgroundColor: "#C9D6FF" }}
          className="package-card animated-card"
        >
          <CardContent className="card-content-scroll">
            {/* Scrollable contents here */}
            <Typography
              variant="h5"
              sx={{ fontFamily: "Courier New", fontSize: "50px" }}
              className="card-title"
            >
              Azerbaijan
            </Typography>
            <Typography
              sx={{ fontSize: "20px", textAlign: "center" }}
              className="card-item"
            >
              <AccessTime sx={{ color: "#b9a3dbff" }} /> 5 Nights / 6 Days
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
                backgroundColor: "#b9a3dbff",
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
                  &nbsp; 05 Nights hotel accommodation in 3 star hotel. <br />
                  <FlightIcon />
                  &nbsp; 06 days breakfast at hotel. <br />
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

export default AzerbaijanTourPackage;
