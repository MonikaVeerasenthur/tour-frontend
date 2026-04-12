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
import img1 from "../assets/Kakheti.jpg";
import img2 from "../assets/MartviliCanyon.jpg";
import img3 from "../assets/Mtskheta.jpg";
import img4 from "../assets/TbilisiCity.jpg";

const faqs = [
  {
    question: "What is included in the Georgia tour package?",
    answer:
      "Accommodation, breakfast, guided tours, local transport, and entrance fees.",
  },
  {
    question: "Are international flights included?",
    answer: "No, flights to/from Georgia are not included.",
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

const GeorgiaTourPackage = () => {
  const itinerary = [
    "Day 1 - Arrival In Tbilisi - Transfer from Shota Rustaveli International Airport to your hotel. Spend your evening at leisure in the Old Town or at the Bridge of Peace.",
    "Day 2 - Tbilisi City Tour - Visit the Holy Trinity Cathedral, Metekhi Church, and take a cable car to Narikala Fortress for panoramic views. Stroll through the Abanotubani sulfur bath district and Shardeni Street.",
    "Day 3 - Ananuri & Kazbegi (Great Caucasus) - A full-day trip north along the Georgian Military Road. Stop at Zhinvali Dam, Ananuri Fortress, and the Gudauri Friendship Monument. Take a 4x4 Jeep to the iconic Gergeti Trinity Church.",
    "Day 4 - Kakheti Wine Region - Visit the 'City of Love, Sighnaghi', with its historic walls and views of the Alazani Valley. Stop at Bodbe Monastery and enjoy a wine-tasting session at a local winery.",
    "Day 5 - Mtskheta & Uplistsikhe - Visit the ancient capital, Mtskheta (a UNESCO site), and Jvari Monastery. Continue to the ancient rock-hewn cave city of Uplistsikhe and the Stalin Museum in Gori.",
    "Day 6 - Departure - Visit the Chronicles of Georgia monument or shop for souvenirs at the Dry Bridge Flea Market before your flight.",
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
      title: "Georgia's Wine-Country Heart",
      description:
        "Kakheti is a lush eastern region of Georgia, famous for its rolling vineyards, historic monasteries, and traditional wine-making. Set along the Alazani Valley with the Caucasus Mountains as a backdrop, it combines scenic beauty with rich cultural heritage.",
      image: img1,
    },
    {
      id: 2,
      title: "Georgia's Hidden Emerald River",
      description:
        "Martvili Canyon is a stunning natural wonder in Georgia, known for its emerald-green waters and lush surroundings. Visitors can take boat trips through the canyon, explore waterfalls, and enjoy the serene beauty of this hidden gem.",
      image: img2,
    },
    {
      id: 3,
      title: "The Ancient Spiritual Heart of Georgia",
      description:
        "Mtskheta is a historic town in eastern Georgia, known as the cradle of the nation's Christian heritage and former royal capital. It sits at the confluence of the Mtkvari and Aragvi rivers, surrounded by hills crowned with ancient churches and monasteries.",
      image: img3,
    },
    {
      id: 4,
      title: "Georgia's Vibrant Mountain Capital",
      description:
        "Tbilisi is the lively capital of Georgia, nestled along the Mtkvari River with a skyline of old churches, colorful balconies, and rugged hills. The city blends ancient architecture in the Old Town with modern streets, cafés, and art galleries, creating a unique East-West atmosphere.",
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
            Georgia
          </Typography>
          <br />
          <Typography variant="body1" className="description">
            Georgia is a small but striking country at the intersection of
            Europe and Asia, known for its dramatic mountains, deep valleys, and
            ancient vineyards. From UNESCO-listed churches and cave monasteries
            to lively cities like Tbilisi and seaside Batumi, it blends history,
            culture, and nature in one journey. Famous for its warm hospitality,
            delicious food, and centuries-old wine traditions, Georgia feels
            like a hidden gem waiting to be explored.
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
            </Stepper>{" "}
            <br />
            <Typography align="center" className="step-content">
              {itinerary[activeStep]}
            </Typography>
          </div>
        </div>

        {/* Card with details */}
        <Card
          sx={{ maxWidth: 360, backgroundColor: "#81cad9ff" }}
          className="package-card animated-card"
        >
          <CardContent className="card-content-scroll">
            {/* Scrollable contents here */}
            <Typography
              variant="h5"
              sx={{ fontFamily: "Courier New", fontSize: "50px" }}
              className="card-title"
            >
              Georgia
            </Typography>
            <Typography
              sx={{ fontSize: "20px", textAlign: "center" }}
              className="card-item"
            >
              <AccessTime sx={{ color: "#3c4c50ff" }} /> 5 Nights / 6 Days
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
                backgroundColor: "#2d555fff",
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

export default GeorgiaTourPackage;
