// src/components/layout/BackButton.jsx
import { useNavigate } from "react-router-dom";
import colors from "../../theme/colors";

export default function BackButton( { onBack } ) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onBack) {
      onBack();
    }
    else {
      navigate(-1);
    }
  };

  const style = {
    fontSize: "3.8rem",      // big + readable
    fontWeight: 2900,         // super bold
    color: colors.primaryDark,
    cursor: "pointer",
    marginBottom: "0rem",
    userSelect: "none",
    border: "none",
    background: "none",
    padding: 0,
    lineHeight: "0",
  };

  return (
    <button
      type="button"
      style={style}
      onClick={() => handleClick()}
    >
      ←
    </button>
  );
}
