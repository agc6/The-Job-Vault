// src/utils/getDropdownStyle.js

const getDropdownStyle = (value) => {
    switch (value) {
      case "internship":
        return { backgroundColor: "#ebf8ff", color: "#3182ce" }; // Blue
      case "full-time":
        return { backgroundColor: "#f0fff4", color: "#38a169" }; // Green
      case "part-time":
        return { backgroundColor: "#fffaf0", color: "#dd6b20" }; // Orange
      case "contract":
        return { backgroundColor: "#faf5ff", color: "#805ad5" }; // Purple
      case "remote":
        return { backgroundColor: "#E0E7FF", color: "#4F46E5" }; // Blue
      case "on-site":
        return { backgroundColor: "#f0fff4", color: "#38a169" }; // Green
      case "hybrid":
        return { backgroundColor: "#ffebeb", color: "#e33d3d" }; // Yellow
      case "waiting for reply":
        return { backgroundColor: "#FCE7F3", color: "#DB2777" }; 
      case "no reply":
        return { backgroundColor: "#f7fafc", color: "#718096" }; // Gray
      case "rejected":
        return { backgroundColor: "#fff5f5", color: "#e53e3e" }; // Red
      case "rejected myself":
        return { backgroundColor: "#fffaf0", color: "#dd6b20" }; // Orange
      case "interviewing":
        return { backgroundColor: "#ebf8ff", color: "#3182ce" }; // Blue
      case "negotiating":
        return { backgroundColor: "#f0fff4", color: "#38a169" }; // Yellow
      case "accepted":
        return { backgroundColor: "#faf5ff", color: "#805ad5" }; // Green
      case "linkedin":
        return { backgroundColor: "#ebf8ff", color: "#3182ce" }; // Blue
      case "company site":
        return { backgroundColor: "#f0fff4", color: "#10B981" }; // Red
      case "other":
        return { backgroundColor: "#faf5ff", color: "#805ad5" }; // Purple
      default:
        return {};
    }
  };
  
  export default getDropdownStyle;
  