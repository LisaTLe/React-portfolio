import React from "react";

const styles = {
  card: {
    margin: 20,
    background: "#aa998f",
  },
  heading: {
    background: "#7d4f50",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "#f9eae1",
    padding: "0 20px",
  },
};

function Navbar() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Home</div>
    </div>
  );
}

export default Navbar;
