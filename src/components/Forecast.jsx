export default function Forecast({ forecast }) {
  return (
    <div className="forecastGrid">
      {forecast.list.slice(0, 5).map((item) => (
        <div key={item.dt} className="card">
          <h3>{new Date(item.dt * 1000).toLocaleDateString()}</h3>
          <img
            className="icon"
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          />
          <p>{Math.round(item.main.temp)}°</p>
        </div>
      ))}
    </div>
  );
}
