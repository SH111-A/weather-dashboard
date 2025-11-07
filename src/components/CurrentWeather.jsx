export default function CurrentWeather({ data }) {
  const { name, sys, main, weather } = data;
  const w = weather[0];

  return (
    <div className="card">
      <h2>
        {name}, {sys.country}
      </h2>
      <div className="iconRow">
        <img
          className="icon"
          src={`https://openweathermap.org/img/wn/${w.icon}@2x.png`}
          alt=""
        />
        <div>
          <div className="temp">{Math.round(main.temp)}°</div>
          <div className="desc">{w.description}</div>
        </div>
      </div>
    </div>
  );
}
