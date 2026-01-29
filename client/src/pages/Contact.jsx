import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const maxChars = 200;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.includes("@") &&
    formData.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error("Please fill all fields correctly");
      return;
    }

    setLoading(true);

    // fake API delay (simulate backend)
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Contact Us
      </h1>

      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 outline-none
                ${formData.name ? "border-green-500" : "border-gray-300"}`}
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 outline-none
                ${
                  formData.email.includes("@")
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              maxLength={maxChars}
              value={formData.message}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 outline-none
                ${formData.message ? "border-green-500" : "border-gray-300"}`}
              placeholder="Write your message..."
            />
            <p className="text-xs text-gray-500 text-right">
              {formData.message.length}/{maxChars}
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`w-full py-2 rounded-md text-white transition
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary hover:bg-primary/90"
              }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
