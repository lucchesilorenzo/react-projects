import Shape from "./Shape";
import { shapes } from "../shapes";

export default function Menu({ onUserShape }) {
  return (
    <div className="menu">
      {shapes.map((shape, i) => (
        <Shape shape={shape} key={i} onUserShape={onUserShape} />
      ))}
    </div>
  );
}
