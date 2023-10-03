// Imported component for main Filter Component
import FilterElement from "../FilterCharacters/FilterElement";
// Select data
const selectElements = [
  { placeholder: "Any", value: "" },
  { placeholder: "Alive", value: "alive" },
  { placeholder: "Dead", value: "dead" },
  { placeholder: "Unknown", value: "unknown" },
];

export default function Filter() {
  return (
    <div className="flex mt-4 ml-4 pt-4 align-middle pb-3 ">
      <p>Character status: </p>
      <div className="flex justify-between gap-2 ml-3">
        {selectElements.map(({ placeholder, value }) => (
          <FilterElement key={value} placeholder={placeholder} value={value} />
        ))}
      </div>
    </div>
  );
}
