import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  InputAdornment,
  Typography,
  MenuItem,
  Alert,
  Grid,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import axios from "axios";
import "../App.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GroupIcon from "@mui/icons-material/Group";
import MessageIcon from "@mui/icons-material/Message";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BookingTour() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    country: "",
    noOfMembers: "",
    message: "",
    startDate: null,
    endDate: null,
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const countryOptions = [
    { label: "Malaysia", value: "Malaysia" },
    { label: "Bali", value: "Bali" },
    { label: "Maldives", value: "Maldives" },
    { label: "Goa", value: "Goa" },
    { label: "Andaman", value: "Andaman" },
    { label: "Coorg", value: "Coorg" },
    { label: "Kerala", value: "Kerala" },
    { label: "Shiradi", value: "Shiradi" },
    { label: "Singapore", value: "Singapore" },
    { label: "Srilanka", value: "Srilanka" },
    { label: "Thailand", value: "Thailand" },
    { label: "Azerbaijan", value: "Azerbaijan" },
    { label: "Philippines", value: "Philippines" },
    { label: "Georgia", value: "Georgia" },
    { label: "Kashmir", value: "Kashmir" },
    { label: "Manali", value: "Manali" }
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess(false);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleDateChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...form,
      startDate: form.startDate
        ? dayjs(form.startDate).format("YYYY-MM-DD")
        : "",
      endDate: form.endDate ? dayjs(form.endDate).format("YYYY-MM-DD") : "",
    };
    if (
      !form.name ||
      !form.email ||
      !form.contact ||
      !form.country ||
      !form.noOfMembers
    ) {
      setError("Please fill in all required fields including dates.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      await axios.post(
        "https://tour-backend-jeve.onrender.com/travel/booking/create",
        dataToSend,
      );
      setStatus("success");
      setForm({
        name: "",
        email: "",
        contact: "",
        country: "",
        noOfMembers: "",
        message: "",
        startDate: null,
        endDate: null,
      });
      toast.success("🎉 Your Booking Is Confirmed 🎉");
    } catch (error) {
      console.error("Booking error:", error.response || error.message);
      setStatus("Failed to submit booking. Try again.");
      toast.error("❌ Failed to submit booking. Try again. ❌");
    }
  };

  return (
    <Box className="booking-form-container">
      <IconButton
        onClick={() => navigate(-1)}
        style={{ position: "absolute", top: 16, left: 16, zIndex: 10 }}
        aria-label="Back"
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>
      <Typography
        sx={{ fontFamily: "cursive" }}
        variant="h4"
        component="h1"
        className="booking-heading"
      >
        Book This Tour
      </Typography>
      <p>{status}</p>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
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
          value={form.email}
          onChange={handleChange}
          required
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
          label="Contact"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          required
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
        />
        <Grid>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              value={form.startDate}
              onChange={(date) => handleDateChange("startDate", date)}
              disablePast
              format="YYYY-MM-DD"
              slotProps={{ textField: { fullWidth: true, required: true } }}
            />
          </LocalizationProvider>
        </Grid>
        <br />
        <Grid>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End Date"
              value={form.endDate}
              onChange={(date) => handleDateChange("endDate", date)}
              format="YYYY-MM-DD"
              minDate={form.startDate}
              slotProps={{ textField: { fullWidth: true, required: true } }}
            />
          </LocalizationProvider>
        </Grid>
        <TextField
          fullWidth
          select
          label="Which Country"
          name="country"
          value={form.country}
          onChange={handleChange}
          required
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* country icon if desired */}
              </InputAdornment>
            ),
          }}
        >
          {countryOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          label="No of Members"
          name="noOfMembers"
          type="number"
          inputProps={{ min: 1 }}
          value={form.noOfMembers}
          onChange={handleChange}
          required
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GroupIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={3}
          value={form.message}
          onChange={handleChange}
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MessageIcon />
              </InputAdornment>
            ),
          }}
        />
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Booking submitted successfully!
          </Alert>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Submit Booking
        </Button>
      </form>
      <ToastContainer theme="colored" />
    </Box>
  );
}