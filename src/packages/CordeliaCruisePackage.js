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
import img1 from "../assets/cordeliaCruise1.jpg";
import img2 from "../assets/cordeliaCruise2.jpg";
import img3 from "../assets/cordeliaCruise3.jpg";
import img4 from "../assets/cordeliaCruise4.png";

const cityData = [
  {
    name: "Mumbai",
    details:
      "Experience the thrill of the seas with our exclusive cruise packages from Mumbai. Whether you’re seeking a relaxing getaway or an adventurous voyage, we offer a range of options to suit every traveler. Enjoy luxurious onboard amenities, breathtaking ocean views, and beautiful destinations like Goa, Lakshadweep, and international hotspots. Book your cruise today for an unforgettable sea adventure!",
  },
  {
    name: "Chennai",
    details:
      "Set sail from Chennai and explore the wonders of the Indian Ocean with our tailored cruise packages. Discover pristine beaches, vibrant cultures, and exotic destinations while enjoying top-notch amenities and entertainment onboard. Whether you're looking for a romantic escape or a family adventure, our cruises from Chennai promise unforgettable experiences. Book now and embark on a journey of a lifetime!",
  },
  {
    name: "Goa",
    details:
      "Embark on a memorable cruise adventure from Goa, where the sun-kissed beaches meet the vast ocean. Our exclusive cruise packages offer a blend of relaxation and excitement, taking you to stunning destinations along the coast and beyond. Enjoy luxurious accommodations, gourmet dining, and vibrant entertainment onboard. Whether you're seeking a romantic getaway or a fun-filled family trip, our cruises from Goa promise unforgettable experiences. Book your voyage today!",
  },
];

export default function CordeliaCruises() {
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
      title: "Cruise Packages From Chennai",
      description:
        "Experience fantastic cruise packages departing from Chennai! Explore short trips to places like Sri Lanka (Trincomalee, Hambantota, and Jaffna) or have 'at sea' adventures with onboard entertainment.",
      features: [
        "Package Name: Cruise Packages",
        "Duration Starts: 5 Nights / 6 Days",
        "Inclusions: 5 nights on a premium cruise, ocean-view accommodations, all meals, entertainment, private transports, and more.",
        "Trip Customization for Family, Honeymoon, Adventure & Friends.",
        "Food: Breakfast, Lunch, Dinner, Snacks (buffet & specialty dining)",
        "Special Features: 24x7 Customer Support for a Hassle-free Travel Experience.",
      ],
    },
    {
      title: "Cruise Packages From Mumbai",
      description:
        "Take off on a captivating cruise package from Mumbai to discover the allure of the Arabian Sea. Enjoy onboard entertainment, cuisine, and luxury accommodations.",
      features: [
        "Package Name: Arabian Sea Voyage",
        "Duration Starts: 4 Nights / 5 Days",
        "Inclusions: Ocean-view cabins, all meals, live shows, and iconic shore excursions.",
        "Custom itineraries for couples, families, and groups.",
        "Fine dining and specialty cuisines onboard.",
        "24x7 support for your convenience.",
      ],
    },
    {
      title: "Cruise Packages From Goa",
      description:
        "Discover the beauty of the Arabian Sea with our Goa cruise packages, featuring relaxing sun decks, spectacular entertainment, and visits to charming ports.",
      features: [
        "Package Name: Coastal Escape",
        "Duration: 3 Nights / 4 Days",
        "Includes: Beach excursions, ocean-view rooms, onboard parties, and gourmet meals.",
        "Tailored options for solo, couples, and families.",
        "All-inclusive dining and entertainment.",
        "24x7 travel concierge.",
      ],
    },
  ];

  const slides = [
    {
      id: 1,
      title: "Sail Beyond Ordinary",
      description:
        "Experience world-class luxury and breathtaking ocean views aboard India’s finest cruise liner.",
      image:
        img1,
    },
    {
      id: 2,
      title: "Escape to the Sea",
      description: "Enjoy gourmet dining, live entertainment, and stunning sunsets on the open waters.",
      image:
        img2,
    },
    {
      id: 3,
      title: "Discover Island Adventures",
      description: "Explore scenic coastal destinations with curated shore excursions and vibrant cultural experiences.",
      image:
        img3,
    },
    {
      id: 4,
      title: "Luxury Redefined",
      description: "Relax in elegant cabins, indulge in spa treatments, and create unforgettable memories at sea.",
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
            Cordelia Cruise
          </Typography>
          <br />
          <Typography
            sx={{ fontSize: "20px" }}
            variant="body1"
            className="description"
          >
            Cordelia Cruises offers luxurious voyages along India's stunning
            coastline. With world-class amenities, exquisite dining, and vibrant
            entertainment, every journey promises unforgettable experiences and
            breathtaking views of the Arabian Sea and beyond.
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
