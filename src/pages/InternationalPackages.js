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
import Malaysia from "../assets/intMal.jpg";
import Bali from "../assets/intBali.jpg";
import Thailand from "../assets/intThailand.jpg";
import Maldives from "../assets/intMaldives.jpg";
import Srilanka from "../assets/intSrilanka.jpg";
import Singapore from "../assets/intSingapore.jpg";
import Azerbaijan from "../assets/azerbaijanTour.jpg";
import Philippines from "../assets/philippinesTour.jpg";
import Georgia from "../assets/georgiaTour.jpg";

const mainImages = [Malaysia, Bali, Thailand, Maldives, Singapore, Srilanka, Azerbaijan, Philippines, Georgia];

const faqs = [
  {
    question: "What is an international tour package?",
    answer:
      "An international tour package is a pre-arranged travel plan that includes transportation, accommodation, and activities in a foreign country.",
  },
  {
    question: "What is included in an international tour package?",
    answer:
      "Typically, an international tour package includes flights, hotel stays, meals, guided tours, and sometimes additional perks like travel insurance or airport transfers.",
  },
  {
    question: "How do I choose the right international tour package?",
    answer:
      "Consider your budget, interests, travel dates, and the destinations you want to visit. Research different packages and read reviews to find one that suits your needs.",
  },
  {
    question: "Are international tour packages customizable?",
    answer:
      "Many travel agencies offer customizable packages where you can select specific activities, accommodations, and durations to fit your preferences.",
  },
];

function InternationalPackages() {
  
  const navigate = useNavigate();
  const international = [
    {
      _id: "1",
      name: "Malaysia",
      image: Malaysia,
      onClick: () => {
        handleMalaysiaCard();
      }
    },
    {
      _id: "2",
      name: "Srilanka",
      image: Srilanka,
      onClick: () => {
        handleSrilankaCard();
      }
    },
    {
      _id: "3",
      name: "Maldives",
      image: Maldives,
      onClick: () => {
        handleMaldivesCard();
      }
    },
    {
      _id: "4",
      name: "Thailand",
      image: Thailand,
      onClick: () => {
        handleThailandCard();
      }
    },
    {
      _id: "5",
      name: "Bali",
      image: Bali,
      onClick: () => {
        handleBaliCard();
      }
    },
    {
      _id: "6",
      name: "Singapore",
      image: Singapore,
      onClick: () => {
        handleSingaporeCard();
      }
    },
    ,
    {
      _id: "7",
      name: "Azerbaijan",
      image: Azerbaijan,
      onClick: () => {
        handleAzerbaijanCard();
      }
    },
    {
      _id: "8",
      name: "Philippines",
      image: Philippines,
      onClick: () => {
        handlePhilippinesCard();
      }
    },
    {
      _id: "9",
      name: "Georgia",
      image: Georgia,
      onClick: () => {
        handleGeorgiaCard();
      }
    }
  ];

  const handleMalaysiaCard = () => {
    navigate("/packages/malaysia-tour-package");
  };

  const handleMaldivesCard = () => {
    navigate("/packages/maldives-tour-package");
  };

  const handleSrilankaCard = () => {
    navigate("/packages/srilanka-tour-package");
  };

  const handleThailandCard = () => {
    navigate("/packages/thailand-tour-package");
  };

  const handleBaliCard = () => {
    navigate("/packages/bali-tour-package");
  };

  const handleSingaporeCard = () => {
    navigate("/packages/singapore-tour-package");
  };

  const handleAzerbaijanCard = () => {
    navigate("/packages/azerbaijan-tour-package");
  };

  const handlePhilippinesCard = () => {
    navigate("/packages/philippines-tour-package");
  };

  const handleGeorgiaCard = () => {
    navigate("/packages/georgia-tour-package");
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
      </Box> <br />
      <Grid container spacing={2} sx={{ ml: 2, mt: 2 }}>
        {international.map((item) => (
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

export default InternationalPackages;