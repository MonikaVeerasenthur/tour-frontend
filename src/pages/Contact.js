import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInput = (value) => {
    return setFormData((data) => {
      return { ...data, ...value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const response = await axios.post(
      "https://tour-backend-jeve.onrender.com/travel/contact/create",
      formData,
    );
    if (response.data.status === "success") {
      setFormData({ name: "", email: "", phone: "", message: "" });
      toast.success("🎉 Message sent successfully! We'll contact you soon.");
    } else {
      console.error("Contact error:", response.data.message);
      setStatus("Failed to send message");
      toast.error("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 2,
        px: 1
      }}
    >
    <p>{status}</p>
      <Card sx={{ maxWidth: 500, width: "100%", borderRadius: "30px", height: "99%" }}>
        <CardContent sx={{ padding: 1 }}>
          <Typography sx={{ textAlign: "center", fontFamily: "monospace" }} variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={(e) => handleInput({ name: e.target.value })}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInput({ email: e.target.value })}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleInput({ phone: e.target.value })}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={(e) => handleInput({ message: e.target.value })}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MessageIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 2,
                fontFamily: "Roboto",
                borderRadius: "20px",
                backgroundColor: "#b08f5a",
                color: "white",
              }} 
            >
              <SendIcon sx={{ fontSize: 15, mr: 1 }} />
              Send
            </Button>
          </form>
          <ToastContainer theme="colored" />
        </CardContent>
      </Card>
    </Box>
  );
}
