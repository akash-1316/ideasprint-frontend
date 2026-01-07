import React, { useState } from "react";
import "./Register.css";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [leaderEmail, setLeaderEmail] = useState("");
  const [leaderMobile, setLeaderMobile] = useState("");
  const [college, setCollege] = useState("");
  const [domain, setDomain] = useState("");

  const [teamSize, setTeamSize] = useState(1);
  const [members, setMembers] = useState([]);

  const handleTeamSizeChange = (size) => {
    setTeamSize(size);
    setMembers(Array(size - 1).fill(""));
  };

  const handleMemberChange = (index, value) => {
    const updated = [...members];
    updated[index] = value;
    setMembers(updated);
  };

  const handleSubmit = async () => {
    if (
      !teamName ||
      !leaderName ||
      !leaderEmail ||
      !leaderMobile ||
      !college ||
      !domain
    ) {
      toast.warning("All fields are required");
      return;
    }

    try {
      await API.post("/registration/register", {
        teamName,
        leaderName,
        leaderEmail,
        leaderMobile,
        college,
        domain,
        teamSize,
        members,
      });

      localStorage.setItem("teamSize", teamSize);
      toast.success("Registration successful");
      navigate("/payment");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="event-container">
        <h2>IdeaSprint – Event Registration</h2>

        <input
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />

        <input
          placeholder="Team Lead Name"
          value={leaderName}
          onChange={(e) => setLeaderName(e.target.value)}
        />

        <input
          placeholder="Lead Email"
          value={leaderEmail}
          onChange={(e) => setLeaderEmail(e.target.value)}
        />

        <input
          placeholder="Lead Mobile Number"
          value={leaderMobile}
          onChange={(e) => setLeaderMobile(e.target.value)}
        />

        <input
          placeholder="College Name-(REC)"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />

        <select value={domain} onChange={(e) => setDomain(e.target.value)}>
          <option value="">Select Domain</option>
          <option>AI / ML</option>
          <option>Web & App Development</option>
          <option>Social Impact</option>
          <option>Open Innovation</option>
        </select>

        {/* ✅ TEAM SIZE LABEL */}
        <p className="team-size-label">Team Size</p>

        <div className="team-size-options">
          {[1, 2, 3].map((size) => (
            <button
              key={size}
              type="button"
              className={teamSize === size ? "active" : ""}
              onClick={() => handleTeamSizeChange(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {members.map((m, i) => (
          <input
            key={i}
            placeholder={`Member ${i + 2} Name`}
            value={m}
            onChange={(e) => handleMemberChange(i, e.target.value)}
          />
        ))}

        <button onClick={handleSubmit}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Register;
