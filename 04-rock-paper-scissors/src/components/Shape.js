import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../icons";

export default function Shape({ shape, onUserShape }) {
  return (
    <button className="shape-btn" onClick={() => onUserShape(shape.shape)}>
      <FontAwesomeIcon icon={shape.icon} />
      <span>{shape.shape}</span>
    </button>
  );
}
