import React, { useState } from "react";
import Slider from "react-slick";
import {
  TextField,
  InputAdornment,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "../App.css";
import Malaysia from "../assets/malaysia.avif";
import Bali from "../assets/Bali.jpg";
import Thailand from "../assets/Thailand.jpg";
import Andaman from "../assets/Andaman.jpg";
import Maldives from "../assets/Maldives.jpg";
import Coorg from "../assets/Coorg.jpg";
import Srilanka from "../assets/Srilanka.jpg";
import Goa from "../assets/Goa.jpg";
import Kerala from "../assets/Kerala.jpg";
import Shiradi from "../assets/Shiradi.jpg";
import Singapore from "../assets/Singapore.jpg";
import Azerbaijan from "../assets/Azerbaijan.jpg";
import Philippines from "../assets/Philippines.jpg";
import Georgia from "../assets/Georgia.jpg";
import Kashmir from "../assets/Kashmir.jpg";
import Manali from "../assets/Manali.jpg";
import MalaysiaCartoon from "../assets/Malaysia-cartoon.webp";
import ThailandCartoon from "../assets/Thailand-cartoon.webp";
import SrilankaCartoon from "../assets/Srilanka-cartoon.jpg";
import MaldivesCartoon from "../assets/Maldives-cartoon.jpg";
import malaysiaCartoon from "../assets/malaysiaCartoon.jpg";
import thailandCartoon from "../assets/thailandCartoon.jpg";
import srilankaCartoon from "../assets/srilankaCartoon.png";
import maldivesCartoon from "../assets/maldivesCartoon.jpg";
import AndamanCartoon from "../assets/andaman-cartoon.jpg";
import GoaCartoon from "../assets/goa-cartoon.jpg";
import KeralaCartoon from "../assets/kerala-cartoon.jpg";
import BaliCartoon from "../assets/bali-cartoon.png";
import CoorgCartoon from "../assets/coorg-cartoon.webp";
import SingaporeCartoon from "../assets/singapore-cartoon.webp";
import ShiradiCartoon from "../assets/shiradi-cartoon.jpg";
import AzerbaijanCartoon from "../assets/Azerbaijan-cartoon.jpg";
import PhilippinesCartoon from "../assets/Philippines-cartoon.jpeg";
import GeorgiaCartoon from "../assets/Georgia-cartoon.jpg";
import KashmirCartoon from "../assets/Kashmir-cartoon.webp";
import ManaliCartoon from "../assets/Manali-Cartoon.avif";
import CordeliaCruise from "../assets/cordelia-cruises.webp";
import GentingDreamCruise from "../assets/GentingDreamCruise.jpg";
import DisneyCruise from "../assets/Disney_Cruise.avif";

const mainImages = [
  Malaysia,
  Bali,
  Thailand,
  Andaman,
  Maldives,
  Coorg,
  Goa,
  Kerala,
  Shiradi,
  Singapore,
  Srilanka,
  Azerbaijan,
  Philippines,
  Georgia,
  Kashmir,
  Manali,
];

const faqs = [
  {
    question: "What types of holiday packages does Vibe Miles Tour offer?",
    answer:
      "In Vibe Miles Tour, we offer a variety of holiday packages including beach vacations, cultural experiences, and family-friendly trips.",
  },
  {
    question: "How do I book a travel package?",
    answer:
      "To book a package, select your desired destination and travel dates, customize your package if needed, and proceed to secure payment. After successful payment, you’ll receive a booking confirmation by email.",
  },
  {
    question: "Is my personal information safe on this website?",
    answer:
      "Absolutely. We use secure encryption and follow best practices to keep your data private and safe.",
  },
  {
    question: "Why choose this Vibe Miles Tour over others?",
    answer:
      "Our platform offers handpicked packages, transparent pricing, expert customer support, and a seamless booking experience for all your travel needs.",
  },
  {
    question: "Who operates the tours and packages?",
    answer:
      "Packages are operated by our trusted network of travel providers, each vetted for quality, reliability, and safety.",
  },
];

function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // Data for top rated tourist spots cards

  const topRated = [
    {
      _id: "1",
      name: "Malaysia",
      image: MalaysiaCartoon,
      onClick: () => {
        handleMalaysiaCard();
      },
    },
    {
      _id: "2",
      name: "Srilanka",
      image: SrilankaCartoon,
      onClick: () => {
        handleSrilankaCard();
      },
    },
    {
      _id: "3",
      name: "Maldives",
      image: MaldivesCartoon,
      onClick: () => {
        handleMaldivesCard();
      },
    },
    {
      _id: "4",
      name: "Thailand",
      image: ThailandCartoon,
      onClick: () => {
        handleThailandCard();
      },
    },
    {
      _id: "5",
      name: "Bali",
      image: BaliCartoon,
      onClick: () => {
        handleBaliCard();
      },
    },
  ];

  // Data for Cruise cards

  const cruise = [
    {
      _id: "1",
      name: "Cordelia Cruises",
      image: CordeliaCruise,
      onClick: () => {
        handleCordeliaCard();
      },
    },
    {
      _id: "2",
      name: "Genting Dream Cruises",
      image: GentingDreamCruise,
      onClick: () => {
        handleGentingDreamCard();
      },
    },
    {
      _id: "3",
      name: "Disney Cruises",
      image: DisneyCruise,
      onClick: () => {
        handleDisneyCruiseCard();
      },
    },
  ];

  // Data for dream destinations cards

  const dreamDestinations = [
    {
      _id: "1",
      name: "Malaysia",
      image: malaysiaCartoon,
      onClick: () => {
        handleMalaysiaCard();
      },
    },
    {
      _id: "2",
      name: "Srilanka",
      image: srilankaCartoon,
      onClick: () => {
        handleSrilankaCard();
      },
    },
    {
      _id: "3",
      name: "Maldives",
      image: maldivesCartoon,
      onClick: () => {
        handleMaldivesCard();
      },
    },
    {
      _id: "4",
      name: "Thailand",
      image: thailandCartoon,
      onClick: () => {
        handleThailandCard();
      },
    },
    {
      _id: "5",
      name: "Andaman",
      image: AndamanCartoon,
      onClick: () => {
        handleAndamanCard();
      },
    },
    {
      _id: "6",
      name: "Goa",
      image: GoaCartoon,
      onClick: () => {
        handleGoaCard();
      },
    },
    {
      _id: "7",
      name: "Kerala",
      image: KeralaCartoon,
      onClick: () => {
        handleKeralaCard();
      },
    },
    {
      _id: "8",
      name: "Bali",
      image: BaliCartoon,
      onClick: () => {
        handleBaliCard();
      },
    },
    {
      _id: "9",
      name: "Coorg",
      image: CoorgCartoon,
      onClick: () => {
        handleCoorgCard();
      },
    },
    {
      _id: "10",
      name: "Singapore",
      image: SingaporeCartoon,
      onClick: () => {
        handleSingaporeCard();
      },
    },
    {
      _id: "11",
      name: "Shiradi",
      image: ShiradiCartoon,
      onClick: () => {
        handleShiradiCard();
      },
    },
    {
      _id: "12",
      name: "Azerbaijan",
      image: AzerbaijanCartoon,
      onClick: () => {
        handleAzerbaijanCard();
      },
    },
    {
      _id: "13",
      name: "Philippines",
      image: PhilippinesCartoon,
      onClick: () => {
        handlePhilippinesCard();
      },
    },
    {
      _id: "14",
      name: "Georgia",
      image: GeorgiaCartoon,
      onClick: () => {
        handleGeorgiaCard();
      },
    },
    {
      _id: "15",
      name: "Kashmir",
      image: KashmirCartoon,
      onClick: () => {
        handleKashmirCard();
      },
    },
    {
      _id: "16",
      name: "Manali",
      image: ManaliCartoon,
      onClick: () => {
        handleManaliCard();
      },
    },
  ];

  // Filtered top rate data based on search query

  const filteredData = dreamDestinations.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.image.toLowerCase().includes(q)
    );
  });

  // Navigation handlers for cards

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
  const handleAndamanCard = () => {
    navigate("/packages/andaman-tour-package");
  };
  const handleGoaCard = () => {
    navigate("/packages/goa-tour-package");
  };
  const handleKeralaCard = () => {
    navigate("/packages/kerala-tour-package");
  };
  const handleBaliCard = () => {
    navigate("/packages/bali-tour-package");
  };
  const handleCoorgCard = () => {
    navigate("/packages/coorg-tour-package");
  };
  const handleSingaporeCard = () => {
    navigate("/packages/singapore-tour-package");
  };
  const handleShiradiCard = () => {
    navigate("/packages/shiradi-tour-package");
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
  const handleKashmirCard = () => {
    navigate("/packages/kashmir-tour-package");
  };
  const handleManaliCard = () => {
    navigate("/packages/manali-tour-package");
  };
  const handleCordeliaCard = () => {
    navigate("/packages/cordelia-cruise-package");
  };
  const handleGentingDreamCard = () => {
    navigate("/packages/gentingDream-cruise-package");
  };
  const handleDisneyCruiseCard = () => {
    navigate("/packages/disney-cruise-package");
  };

  // Settings for main image slider

  const mainSettings = {
    dots: false,
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

              {/* Overlay search bar */}

              <Box className="search-overlay">
                <TextField
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Where do you want to go?"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  className="search-input"
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <h1 className="top-rate">DREAM DESTINATIONS</h1>
      <br />
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          width: "95%",
          mb: 4,
          mx: "auto",
        }}
      >
        {filteredData.length === 0 ? (
          <Typography sx={{ ml: 2, mt: 2 }}>No results found</Typography>
        ) : (
          filteredData.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item._id}>
              <Card
                sx={{
                  borderRadius: "50px",
                  textAlign: "center",
                  marginTop: "10px",
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
          ))
        )}
      </Grid>
      <br />
      <div style={{ backgroundColor: "#b08f5a" }}>
        <br />
        <h2 className="dream-spot">TOP RATED TOURIST SPOTS</h2> <br />
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            width: "95%",
            mb: 4,
          }}
        >
          {topRated.map((item) => (
            <Grid item xs={12} sm={6} key={item._id}>
              <Card
                sx={{
                  borderRadius: "50px",
                  textAlign: "center",
                  marginTop: "10px",
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
        <br /> <br />
      </div>
      <h2 className="dream-spot">LUXURY CRUISE AWAITS</h2> <br />
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
          width: "95%",
          mb: 4,
        }}
      >
        {cruise.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
            <Card
              sx={{
                borderRadius: "30px",
                textAlign: "center",
                marginTop: "10px",
                height: { xs: 200, sm: 260, md: 240 },
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
              role="button"
              className="horizontal-card"
              onClick={item.onClick}
            >
              <CardMedia
                className="horizontal-card-image"
                component="img"
                height={{ xs: 180, sm: 160, md: 140 }}
                image={item.image}
                alt={item.name}
                sx={{ borderRadius: "30px 30px 0 0", objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  className="horizontal-card-title"
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                >
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
          backgroundColor: "#f5f5f5",
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
            textAlign: "center",
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

export default Home;
