import React, { useState } from "react";
import axios from "axios";
import { Alert } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess(false);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...form,
    };
    if (!form.name || !form.email || !form.contact || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      await axios.post(
        "https://tour-backend-jeve.onrender.com/travel/cruise/enquiry/create",
        dataToSend,
      );
      setStatus("success");
      setForm({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
      toast.success("Your Enquiry Is Sent Successfully");
    } catch (error) {
      console.error("Enquiry error:", error.response || error.message);
      setStatus("Failed to submit enquiry. Try again.");
      toast.error("❌ Failed to submit enquiry. Try again. ❌");
    }
  };

  return (
    <div className="container mt-4">
      <form noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className='form-control'
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className='form-control'
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Contact
          </label>
          <input
            type="tel"
            className='form-control'
            id="contact"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className='form-control'
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Enquiry sent successfully!
          </Alert>
        )}
        <button type="submit" className="btn btn-primary">
          Send Enquiry
        </button>
      </form>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default EnquiryForm;