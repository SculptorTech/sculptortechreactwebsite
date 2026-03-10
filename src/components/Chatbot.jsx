import { useState, useRef, useEffect } from "react";
 
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi 👋 I’m SculptorTech Assistant. How can I help you today?",
    },
  ]);
  const [quickReplies, setQuickReplies] = useState([]);
  const chatContainerRef = useRef(null);
 
  const websiteData = {
    services:
      "We provide Web Development, Mobile App Development, UI/UX Design, Business Analytics, Cloud Solutions, and IT Consulting services.",
    serviceProviders: [
      "Web Developer",
      "Mobile App Developer",
      "UI/UX Designer",
      "Business Analyst",
      "IT Consultant",
    ],
    technologies:
      "We use HTML, CSS, JavaScript, React, Node.js, MongoDB, SQL, and modern cloud technologies.",
    industries:
      "We work with startups, small businesses, enterprises, education, healthcare, and event-based platforms.",
    about:
      "SculptorTech is a technology-driven IT company focused on building modern, scalable, and secure digital solutions.",
    projects:
      "We have built websites, dashboards, management systems, and custom software solutions.",
    location:
      "SculptorTech operates remotely and serves clients across India and globally.",
    contactDetails: {
      email: "support@sculptortech.com",
      whatsapp: "919876543210",
    },
    clients: [
      "Dr. B.B. Chavan Military School",
      "MG CAPITAL MAINTENANCE",
      "SaptaDhanya Food Product",
      "Bhadra Breeding Centre",
    ],
  };
 
  const handleSend = (customInput) => {
    const text = customInput || input;
    if (!text.trim()) return;
 
    const query = text.toLowerCase();
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
   
    // Reset quick replies initially
    setQuickReplies([]);
 
    let botReply = "";
 
    // 1. Check for Greetings
    if (["hi", "hello", "hey"].some((w) => query.includes(w))) {
      botReply = "Hello! 👋 What would you like to enquire about?";
      setQuickReplies(["Services", "Team", "Contact"]);
    }
    // 2. Specific Enquiries
    else if (query.includes("service")) {
      botReply = websiteData.services;
    } else if (query.includes("team")) {
      botReply = `Our team includes: ${websiteData.serviceProviders.join(", ")}.`;
    } else if (query.includes("contact")) {
      botReply = "You can contact us using the options below 👇";
      setQuickReplies(["Email", "WhatsApp"]);
    } else if (query.includes("client")) {
      botReply = `We have worked with ${websiteData.clients.length} clients: ${websiteData.clients.join(", ")}.`;
    }
    // 3. Fallback for any other unknown message
    else {
      botReply = "Sorry, I couldn’t understand that. Please choose an option below.";
      setQuickReplies(["Services", "Team", "Contact"]);
    }
 
    setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
  };
 
  const handleQuickReply = (option) => {
    if (option === "Email") {
      window.location.href = `mailto:${websiteData.contactDetails.email}`;
    } else if (option === "WhatsApp") {
      window.open(
        `https://wa.me/${websiteData.contactDetails.whatsapp}`,
        "_blank"
      );
    } else {
      handleSend(option);
    }
  };
 
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
 
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: "6px",
          right: "4px",
          width: "34px",
          height: "34px",
          borderRadius: "50%",
          background: "#3DA8BC",
          border: "none",
          cursor: "pointer",
          zIndex: 1000,
          fontSize: "22px",
        }}
      >
        🤖
      </button>
 
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "308px",
            background: "#111827",
            color: "#fff",
            borderRadius: "15px",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#3DA8BC",
              padding: "18px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            SculptorTech Assistant
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
 
          <div
            ref={chatContainerRef}
            style={{
              padding: "10px",
              height: "200px",
              overflowY: "auto",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign: msg.from === "user" ? "right" : "left",
                  margin: "8px 0",
                }}
              >
                {msg.text}
              </div>
            ))}
 
            {quickReplies.length > 0 && (
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {quickReplies.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickReply(opt)}
                    style={{
                      background: "#8f3dfc",
                      border: "none",
                      borderRadius: "8px",
                      padding: "6px 10px",
                      color: "#fff",
                      cursor: "pointer",
                      fontSize: "13px",
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
 
          <div style={{ display: "flex", borderTop: "1px solid #333" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              style={{
                flex: 1,
                padding: "10px",
                background: "transparent",
                border: "none",
                color: "#fff",
                outline: "none",
              }}
            />
            <button
              onClick={() => handleSend()}
              style={{
                background: "#3DA8BC",
                border: "none",
                color: "#fff",
                padding: "10px 14px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}