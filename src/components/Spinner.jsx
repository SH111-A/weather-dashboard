export default function Spinner({ label }) {
  return (
    <div className="spinnerWrap">
      <div className="spinner" />
      <span>{label}</span>
    </div>
  );
}
