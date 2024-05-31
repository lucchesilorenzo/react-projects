const animals = [
  {
    animal: "dog",
    video: "videos/dog.mp4",
  },
  {
    animal: "cat",
    video: "videos/cat.mp4",
  },
  {
    animal: "monkey",
    video: "videos/monkey.mp4",
  },
  {
    animal: "cow",
    video: "videos/cow.mp4",
  },
];

export default function Menu({ onEditVideo }) {
  return (
    <div className="menu">
      {animals.map((animal, i) => (
        <div key={i}>
          <input
            type="radio"
            value={animal.video}
            name="animal"
            onChange={(e) => onEditVideo(e.target.value)}
          />
          <label>{animal.animal}</label>
        </div>
      ))}
    </div>
  );
}
