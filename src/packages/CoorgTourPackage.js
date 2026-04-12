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
import img1 from "../assets/BrahmagirHills.jpg";
import img2 from "../assets/DubareElephantCamp.jpg";
import img3 from "../assets/IruppuFalls.jpg";
import img4 from "../assets/Karada.jpg";

const faqs = [
  {
    question: "What is included in the Coorg tour package?",
    answer:
      "Accommodation, breakfast, guided tours, local transport, and entrance fees.",
  },
  {
    question: "Are international flights included?",
    answer: "No, flights to/from Coorg are not included.",
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

const CoorgTourPackage = () => {
  const itinerary = [
    "Day 1 - Morning: Arrive in Madikeri, check into your hotel or plantation stay, and have lunch. Afternoon: Visit the historic Madikeri Fort, a 17th-century structure that now houses a museum and government offices. Afterward, visit the unique Omkareshwara Temple, which features a blend of Islamic and Gothic architectural styles. Evening: Head to Raja's Seat ('Seat of the King') to witness a spectacular sunset over the green hills and valleys. It's a beautiful garden and viewpoint where the Kings of Kodagu would relax.",
    "Day 2 - Morning: Drive 8-10 km from Madikeri to Abbey Falls, a breathtaking waterfall cascading down between private coffee and spice estates. The view from the hanging bridge is magnificent. Afternoon: Immerse yourself in Coorg's main crop. Take a guided walking tour through a local Coffee or Spice Plantation to learn about the journey from bean to brew. Many tours include coffee tasting. Visit the Gaddige or Raja's Tomb, an impressive Indo-Sarcenic style structure built in memory of the Kodava royalty. Evening: Spend the evening exploring the local markets of Madikeri for Coorg coffee, local honey, spices, and traditional Kodava attire (if interested).",
    "Day 3 - Morning: Drive to Dubare Elephant Camp (reach before 9:00 AM is recommended). Participate in the unique experience of bathing and feeding elephants by the Cauvery River. Afternoon: Visit this beautiful river island formed by the River Cauvery. It's a lush picnic spot with bamboo groves, a deer park, and a hanging rope bridge. Head to Bylakuppe to visit the famous Tibetan settlement and the stunning Namdroling Monastery (The Golden Temple). Marvel at the 40-foot tall golden statues of Buddha and the vibrant murals. Evening: Drive back to Madikeri for dinner and a relaxed evening.",
    "Day 4 - Morning: Embark on an adventurous jeep ride (mandatory for the last stretch) to Mandalpatti Viewpoint. This offers one of the best panoramic views of the Western Ghats' grassy knolls. Tip: Start early for the best visibility. Afternoon: Visit Talacauvery, the source of the River Cauvery, situated on the Brahmagiri Hill. After offering prayers and taking in the incredible views, head to Bhagamandala, a sacred site at the confluence of the Cauvery, Kabini, and Sujyothi rivers (Triveni Sangam). Evening: Return to your accommodation. Dedicate the evening to trying traditional Kodava cuisine, such as Pandhi Curry (Pork Curry) and Kadambuttu (rice balls).",
    "Day 5 - Morning: Enjoy a final Coorg breakfast. Depending on your travel schedule, you can do some last-minute souvenir shopping or simply relax amidst the plantation ambiance. Late Morning: Check out from your accommodation and proceed to the airport, railway station, or your next destination.",
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
      title: "Scenic Trekking Paradise",
      description:
        "Brahmagiri Hills offers lush green trekking trails through dense forests, with panoramic views of the Western Ghats and a chance to spot diverse wildlife.",
      image:
        img1,
    },
    {
      id: 2,
      title: "Unique Elephant Experience",
      description: "A popular camp where visitors can interact with, feed, and bathe elephants, providing an immersive and educational wildlife experience in a natural setting.",
      image:
        img2,
    },
    {
      id: 3,
      title: "Majestic Waterfall Retreat",
      description: "Iruppu Falls is a stunning cascade set amidst serene forest surroundings, perfect for nature lovers seeking tranquility and refreshing nature walks.",
      image:
        img3,
    },
    {
      id: 4,
      title: "Hidden Nature Gem",
      description: "Karada is a peaceful village known for its scenic coffee plantations, rolling hills, and quiet escapes, ideal for those wanting to explore Coorg’s rural charm.",
      image:
        img4,
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
            className="coorg"
            sx={{ fontFamily: "Georgia", fontWeight: 600, fontSize: "40px" }}
            variant="h4"
          >
            Coorg
          </Typography>
          <br />
          <Typography variant="body1" className="description">
            Coorg, also known as Kodagu, is a district in Karnataka, India,
            famous for its stunning natural beauty, including misty mountains,
            lush green landscapes, and numerous waterfalls and rivers. It is
            particularly renowned for its vast coffee and spice plantations,
            earning it the nickname the "Scotland of India". Beyond its scenic
            appeal, Coorg is home to a distinct Kodava culture and offers
            opportunities for adventure sports like trekking and river rafting.
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
          sx={{ maxWidth: 360, backgroundColor: "#E6E6FA" }}
          className="package-card animated-card"
        >
          <CardContent className="card-content-scroll">
            {/* Scrollable contents here */}
            <Typography
              variant="h5"
              sx={{ fontFamily: "Courier New", fontSize: "50px" }}
              className="card-title"
            >
              Coorg
            </Typography>
            <Typography
              sx={{ fontSize: "20px", textAlign: "center" }}
              className="card-item"
            >
              <AccessTime sx={{ color: "#BF40BF" }} /> 4 Nights / 5 Days
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
                backgroundColor: "#BF40BF",
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

export default CoorgTourPackage;
