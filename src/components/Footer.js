import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import "../App.css";

const icons = [
  { icon: <FacebookIcon />, link: "https://www.facebook.com/share/1BFjr2M8xJ/" },
  { icon: <InstagramIcon />, link: "https://www.instagram.com/vibemiles_tour?utm_source=qr&igsh=MTRvcjJhaW9qYXprdg==" },
  { icon: <WhatsAppIcon />, link: "https://wa.me/message/YL3MWPDO6TCZF1" },
  { icon: <YouTubeIcon />, link: "https://youtube.com/@vibemiles-f1o?si=NkLdjnS4EAI41A2v" },
];

const contactEmail = "info@vibemilestour.in";

function Footer() {
  return (
    <Box className="footer-container">
      <Box className="footer-icons">
        {icons.map(({ icon, link }, idx) => (
          <IconButton
            className="custom-link"
            color="inherit"
            key={idx}
            href={link}
            target="_blank"
          >
            {icon}
          </IconButton>
        ))}
      </Box>
      <Box className="footer-contact">
        <Typography
          component="a"
          className="footer-contact-text"
        >
          Contact Us :
        </Typography>
        <EmailIcon className="email-icon" />
        <Typography className="footer-contact-email">{contactEmail}</Typography>
      </Box>
    </Box>
  );
}

export default Footer;