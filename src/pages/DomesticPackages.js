import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Andaman from "../assets/dom-andaman.jpg";
import Goa from "../assets/dom-goa.jpg";
import Kerala from "../assets/dom-kerala.jpg";
import Shiradi from "../assets/dom-shiradi.jpg";
import Coorg from "../assets/dom-coorg.jpg";
import Kashmir from "../assets/KashmirTour.jpg";
import Manali from "../assets/ManaliTour.jpg";

const mainImages = [Andaman, Goa, Kerala, Shiradi, Coorg, Kashmir, Manali];

const faqs = [
  {
    question: "What is a domestic tour package?",
    answer:
      "A domestic tour package is a pre-arranged travel plan that includes transportation, accommodation, and activities within one's own country.",
  },
  {
    question: "What is included in a domestic tour package?",
    answer:
      "Typically, a domestic tour package includes transportation, hotel stays, meals, guided tours, and sometimes additional perks like travel insurance or local experiences.",
  },
  {
    question: "How do I choose the right domestic tour package?",
    answer:
      "Consider your budget, interests, travel dates, and the destinations you want to visit. Research different packages and read reviews to find one that suits your needs.",
  },
  {
    question: "Are domestic tour packages customizable?",
    answer:
      "Many travel agencies offer customizable packages where you can select specific activities, accommodations, and durations to fit your preferences.",
  },
];

function DomesticPackages() {
  const navigate = useNavigate();

  const domestic = [
    {
      _id: "1",
      name: "Andaman",
      image: Andaman,
      onClick: () => {
        handleAndamanCard();
      },
    },
    {
      _id: "2",
      name: "Goa",
      image: Goa,
      onClick: () => {
        handleGoaCard();
      },
    },
    {
      _id: "3",
      name: "Kerala",
      image: Kerala,
      onClick: () => {
        handleKeralaCard();
      },
    },
    {
      _id: "4",
      name: "Shiradi",
      image: Shiradi,
      onClick: () => {
        handleShiradiCard();
      },
    },
    {
      _id: "5",
      name: "Coorg",
      image: Coorg,
      onClick: () => {
        handleCoorgCard();
      },
    },
    {
      _id: "6",
      name: "Kashmir",
      image: Kashmir,
      onClick: () => {
        handleKashmirCard();
      },
    },
    {
      _id: "7",
      name: "Manali",
      image: Manali,
      onClick: () => {
        handleManaliCard();
      },
    },
  ];

  const handleAndamanCard = () => {
    navigate("/packages/andaman-tour-package");
  };

  const handleGoaCard = () => {
    navigate("/packages/goa-tour-package");
  };

  const handleKeralaCard = () => {
    navigate("/packages/kerala-tour-package");
  };

  const handleShiradiCard = () => {
    navigate("/packages/shiradi-tour-package");
  };

  const handleCoorgCard = () => {
    navigate("/packages/coorg-tour-package");
  };

  const handleKashmirCard = () => {
    navigate("/packages/kashmir-tour-package");
  };

  const handleManaliCard = () => {
    navigate("/packages/manali-tour-package");
  };

  const mainSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box className="home-container">
      <Box className="main-slider-container">
        <Slider {...mainSettings}>
          {mainImages.map((img, idx) => (
            <Box key={idx} className="slide-image-wrapper">
              <img src={img} alt={`Slide ${idx + 1}`} className="slide-image" />
            </Box>
          ))}
        </Slider>
      </Box>{" "}
      <br />
      <Grid container spacing={2} sx={{ ml: 2, mt: 2 }}>
        {domestic.map((item) => (
          <Grid item xs={12} sm={6} key={item._id}>
            <Card
              sx={{
                borderRadius: "50px",
                textAlign: "center",
                marginTop: "10px",
                marginLeft: "80px",
                width: "230px",
              }}
              role="button"
              className="horizontal-card"
              onClick={item.onClick}
            >
              <CardMedia
                className="horizontal-card-image"
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography className="horizontal-card-title" variant="h6">
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
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
          sx={{
            fontFamily: "revert",
            fontSize: "30px",
            fontWeight: "bold",
          }}
          variant="h5"
          gutterBottom
        >
          Frequently Asked Questions
        </Typography>
        <br />
        {faqs.map((faq, i) => (
          <Accordion key={i} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
    </Box>
  );
}

export default DomesticPackages;
