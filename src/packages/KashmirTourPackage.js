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
import img1 from "../assets/DalLake.jpg";
import img2 from "../assets/Gulmarg.jpg";
import img3 from "../assets/Pahalgam.jpg";
import img4 from "../assets/Sonamarg.jpg";

const faqs = [
  {
    question: "What is included in the Kashmir tour package?",
    answer:
      "Accommodation, breakfast, guided tours, local transport, and entrance fees.",
  },
  {
    question: "Are international flights included?",
    answer: "No, flights to/from Kashmir are not included.",
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

const KashmirTourPackage = () => {
  const itinerary = [
    "Day 1 - Arrival in Srinagar & Houseboat Stay - Morning : Arrive at Srinagar International Airport and transfer to a traditional houseboat on Dal Lake.. Afternoon : Relax and enjoy a 1-hour Shikara ride to see floating markets and the Zabarwan mountain range. Evening : Enjoy a traditional Kashmiri dinner on the houseboat.",
    "Day 2 - Srinagar to gulmarg (Meadow of Flowers) - Activity : Take a day excursion to Gulmarg (approx. 2 hours from Srinagar). Highlights : Ride the Gulmarg Gondola, one of the highest cable cars in the world, to reach Apharwat Peak for snow views. Evening : Return to Srinagar for an overnight stay in a hotel.",
    "Day 3 - Srinagar to Pahalgam (Valley of Shepherds) - En Route : Stop at Pampore Saffron fields and the 1,100-year-old Awantipura ruins. Activity : Explore the scenic Betaab Valley (named after the Bollywood film), Aru Valley, and Chandanwari. Stay : Many itineraries offer an overnight stay in Pahalgam to enjoy the riverside peace, while others return to Srinagar.",
    "Day 4 - Srinagar Local Sightseeing or Sonamarg - Option A (Local) : Visit the Mughal Gardens (Shalimar Bagh,Nishat Bagh,Chashme Shahi) and the hilltop Shankaracharya Temple for panoramic city views. Option B (Excursion) : Take a day trip to Sonamarg (Meadow of Gold) to visit the Thajiwas Glacier via pony ride. Stay : Final overnight stay in Srinagar.",
    "Day 5 - Departure from Srinagar - Morning : Enjoy a final breakfast and some last-minuteshopping for local handicrafts, Pashmina shawls, or dry fruits. Afternoon : Transfer to Srinagar Airport for your return flight",
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
      title: "Srinagar's Floating Paradise",
      description:
        "Dal Lake is a serene, sprawling lake in the heart of Srinagar, Jammu and Kashmir, famous for its shimmering waters and surrounding snow-capped mountains. Lined with willow trees and dotted with colorful houseboats and shikaras, it offers a peaceful escape and a glimpse into local life.",
      image: img1,
    },
    {
      id: 2,
      title: "The Meadow of Flowers in the Himalayas",
      description:
        "Gulmarg is a scenic hill station in Jammu and Kashmir, set in a high-altitude valley surrounded by snow-capped Himalayan peaks. In summer, it becomes a lush green meadow dotted with wildflowers, while in winter it turns into a world-class ski destination.",
      image: img2,
    },
    {
      id: 3,
      title: "The Valley of Shepherds",
      description:
        "Pahalgam is a peaceful hill town in Jammu and Kashmir, set in a lush valley surrounded by pine forests and the towering Himalayas. Known for its cool climate, sparkling Lidder River, and scenic meadows, it is a favorite base for trekkers and nature lovers.",
      image: img3,
    },
    {
      id: 4,
      title: "The Meadow of Gold",
      description:
        "Sonamarg is a picturesque hill station in Jammu and Kashmir, lying along the banks of the glistening Sind River and surrounded by snow-capped peaks. Often called the “gateway to the glaciers,” it serves as a base for treks to places like Thajiwas Glacier and the stunning Amarnath Cave.",
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
            Kashmir
          </Typography>
          <br />
          <Typography variant="body1" className="description">
            Kashmir is a breathtaking region in the northwestern Himalayas,
            famed for its snow-capped peaks, deep valleys, alpine lakes, and
            lush meadows. From the houseboats of Dal Lake in Srinagar to the
            meadows of Gulmarg and Pahalgam, it offers some of India's most
            stunning natural scenery. With a rich cultural blend of ancient
            traditions, handicrafts, and warm hospitality, Kashmir feels like a
            serene paradise nestled in the mountains.
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
          sx={{ maxWidth: 360, backgroundColor: "#24c6dc" }}
          className="package-card animated-card"
        >
          <CardContent className="card-content-scroll">
            {/* Scrollable contents here */}
            <Typography
              variant="h5"
              sx={{ fontFamily: "Courier New", fontSize: "50px" }}
              className="card-title"
            >
              Kashmir
            </Typography>
            <Typography
              sx={{ fontSize: "20px", textAlign: "center" }}
              className="card-item"
            >
              <AccessTime sx={{ color: "#514A9D" }} /> 4 Nights / 5 Days
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
                backgroundColor: "#514A9D",
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
            backgroundImage: "radial-gradient(navy, #b08f5a)",
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

export default KashmirTourPackage;
