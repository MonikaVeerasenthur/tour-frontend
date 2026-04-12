import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Modal,
  Chip,
  Button,
  Fade,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import "./style.css";
import EnquiryForm from "../components/EnquiryForm";
import img1 from "../assets/gentingDream1.jpg";
import img2 from "../assets/gentingDream2.jpg";
import img3 from "../assets/gentingDream3.jpg";
import img4 from "../assets/gentingDream4.jpg"; 

const cityData = [
  {
    name: "Singapore",
    details:
      "Discover our exclusive cruise packages departing from Singapore! Explore breathtaking destinations across Southeast Asia, including Malaysia, Thailand, Vietnam, and Indonesia. Enjoy luxurious accommodations, world-class dining, and exciting onboard entertainment as you sail from the vibrant city of Singapore to stunning locales like Langkawi, Phuket, Ho Chi Minh City, and Bali. Whether you're seeking adventure, relaxation, or cultural experiences, our Singapore cruise packages offer something for every traveler. Book your dream cruise today and embark on an unforgettable journey from Singapore!",
  },
];

export default function GentingDreamCruises() {
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [openEnquiryForm, setOpenEnquiryForm] = useState(false);
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

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setFormOpen(false);
    setOpen(true);
  };

  const handleOpenForm = () => {
    setOpen(false);
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  const handleOpen = () => setOpenEnquiryForm(true);
  const handleClose = () => setOpenEnquiryForm(false);

  const packages = [
    {
      title: "Cruise Packages From Singapore",
      description:
        "Embark on an unforgettable cruise adventure from Singapore with our exclusive packages. Explore stunning destinations, indulge in world-class amenities, and create lasting memories on the high seas.",
      features: [
        "Package Name: Cruise Packages",
        "Duration Starts: 5 Nights / 6 Days",
        "Inclusions: 5 nights on a premium cruise, ocean-view accommodations, all meals, entertainment, private transports, and more.",
        "Trip Customization for Family, Honeymoon, Adventure & Friends.",
        "Food: Breakfast, Lunch, Dinner, Snacks (buffet & specialty dining)",
        "Special Features: 24x7 Customer Support for a Hassle-free Travel Experience.",
      ],
    },
  ];

  const slides = [
    {
      id: 1,
      title: "Luxury on the Waves",
      description:
        "Experience spacious suites, VIP service, and exclusive amenities on Genting Dream, Asia’s premier cruise liner.",
      image:
        img1,
    },
    {
      id: 2,
      title: "Endless Entertainment",
      description: "Enjoy Broadway-style shows, water slides, casinos, fitness centers, and pools for fun-filled days at sea.",
      image:
        img2,
    },
    {
      id: 3,
      title: "Diverse Dining",
      description: "Savor more than 35 restaurants and bars offering global cuisines from casual buffets to gourmet dining experiences.",
      image:
        img3,
    },
    {
      id: 4,
      title: "Adventure and Relaxation",
      description: "Take part in thrilling water sports or unwind with spa treatments and sunbathing on the expansive deck areas.",
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
      <Box
        sx={{
          p: 0,
          mt: 4,
          mb: 8,
          minHeight: "70vh",
          position: "relative",
          px: 5,
        }}
      >
        <div className="info-section">
          <Typography
            className="Cordelia-in"
            sx={{
              fontWeight: "800",
              fontFamily: "Georgia",
              color: "#b08f5a",
              fontSize: "2.5rem",
            }}
            variant="h4"
          >
            Genting Dream Cruise
          </Typography>
          <br />
          <Typography
            sx={{ fontSize: "20px" }}
            variant="body1"
            className="description"
          >
            Set sail on an extraordinary journey with Genting Dream Cruise, where
            luxury meets adventure on the high seas. Experience world-class amenities,
            exquisite dining, and thrilling entertainment as you explore breathtaking
            destinations across Asia. Whether you're seeking relaxation or excitement,
            Genting Dream Cruise offers unforgettable vacations for families, couples,
            and solo travelers alike. Embark on a voyage of a lifetime and create lasting
            memories with Genting Dream Cruise.
          </Typography>
        </div>
        <br />
        <Typography
          variant="h2"
          className="Cordelia-out"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2.2rem",
              md: "3.1rem",
              color: "#554a39ff",
              fontFamily: "serif",
              textAlign: "center",
            },
          }}
        >
          Choose Your Departure Destination
        </Typography>
        <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            width: "100%",
            mb: 4,
          }}
        >
          {cityData.map((city) => (
            <Chip
              icon={<LocationOnIcon color="danger" />}
              label={city.name}
              onClick={() => handleCityClick(city)}
              sx={{
                p: 2,
                borderRadius: "26px",
                bgcolor: "#fff6fa",
                color: "brown",
                fontWeight: 700,
                fontSize: "1.13rem",
                boxShadow: "0 2px 22px #be9e86cc",
                border: "2.5px solid #b29472ff",
                transition: "all .22s cubic-bezier(.6,1.3,.2,1.1)",
                "&:hover": {
                  bgcolor: "#be9e86cc",
                  boxShadow: "0 7px 28px #ffb0e355",
                },
              }}
            />
          ))}
        </Box>

        {/* Modal for city details */}
        <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition>
          <Fade in={open}>
            <Box
              sx={{
                position: "absolute",
                top: "52%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                minWidth: 330,
                maxWidth: "93vw",
                background: "rgba(255,255,255,0.92)",
                borderRadius: "20px",
                boxShadow: "0 12px 80px #fff1f7cc",
                p: 2,
                outline: "none",
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: 11,
                  right: 13,
                  color: "#b08f5a",
                }}
                onClick={() => setOpen(false)}
              >
                <CloseIcon fontSize="medium" />
              </IconButton>
              {selectedCity && (
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: "20px",
                    boxShadow: "0 8px 32px #be9e86cc",
                    m: 0,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ color: "#b08f5a", fontWeight: 700 }}
                    >
                      Cruise Packages From {selectedCity.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mt: 1.5, fontSize: "1rem" }}
                    >
                      {selectedCity.details}
                    </Typography>
                    <br />
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "20px",
                        color: "#fff",
                        backgroundColor: "#e75959ff",
                      }}
                      onClick={handleOpenForm}
                    >
                      Enquire Now
                    </Button>
                  </CardContent>
                </Card>
              )}
            </Box>
          </Fade>
        </Modal>

        {/* Modal for the form */}
        <Modal
          open={formOpen}
          onClose={handleCloseForm}
          closeAfterTransition
          aria-labelledby="mui-form-modal"
        >
          <Fade in={formOpen}>
            <Box
              sx={{
                position: "absolute",
                top: "52%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: "90vw", sm: 400, md: 500 }, // Responsive width
                maxHeight: "90vh",
                overflowY: "auto", // Scroll if content is tall
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
                boxShadow: "0 8px 32px #be9e86cc",
                p: 4,
                outline: "none",
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: 11,
                  right: 13,
                  color: "#b08f5a",
                }}
                onClick={handleCloseForm}
              >
                <CloseIcon fontSize="medium" />
              </IconButton>
              <Typography
                variant="h5"
                sx={{ mb: 3, color: "#b08f5a", fontWeight: 700 }}
              >
                Enquiry Form
              </Typography>
              <EnquiryForm />
            </Box>
          </Fade>
        </Modal>
        <Box
          sx={{
            maxWidth: 960,
            margin: "auto",
            padding: { xs: 2, sm: 4 },
            paddingBottom: "100px",
          }}
        >
          {packages.map((pkg, idx) => (
            <Box
              key={idx}
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: 3,
                boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
                p: { xs: 3, sm: 5 },
                mb: 6,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "700",
                  color: "#b08f5a",
                  mb: 2,
                  textTransform: "uppercase",
                  fontFamily: "Georgia",
                }}
              >
                {pkg.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 3, color: "#37474f", lineHeight: 1.7 }}
              >
                {pkg.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "#b08f5a",
                  fontFamily: "Georgia",
                  fontSize: 15,
                  borderRadius: 5,
                  mb: 1.5,
                  textTransform: "none",
                  px: 3,
                  boxShadow: "none",
                  fontWeight: 500,
                }}
              >
                Package Includes
              </Button>
              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  p: 0,
                  m: 0,
                  mb: 4,
                }}
              >
                {pkg.features.map((feature, i) => (
                  <Box
                    component="li"
                    key={i}
                    sx={{ display: "flex", alignItems: "center", mb: 1.5 }}
                  >
                    <CheckCircleOutlineIcon sx={{ mr: 1, color: "#b08f5a" }} />
                    <Typography variant="body2" sx={{ color: "#455a64" }}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ef5350",
                  fontFamily: "Georgia",
                  color: "#fff",
                  px: 4,
                  py: 1.3,
                  borderRadius: 30,
                  fontWeight: "bold",
                  fontSize: { xs: 14, sm: 16 },
                  "&:hover": {
                    backgroundColor: "red",
                  },
                }}
                onClick={handleOpen}
              >
                Enquire Now
              </Button>
              <Dialog
                open={openEnquiryForm}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
              >
                <DialogTitle>Enquiry Form</DialogTitle>
                <DialogContent>
                  <EnquiryForm />
                </DialogContent>
              </Dialog>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
}