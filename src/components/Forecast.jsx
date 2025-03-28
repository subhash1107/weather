const Forecast = ({ forecastData }) => {
    if (!forecastData || !forecastData.list) return null;
  
    // Filter for one forecast per day (e.g., 12:00 PM)
    const dailyForecast = forecastData.list.filter(item => 
      item.dt_txt.includes("12:00:00")
    );
  
    return (
      <div className="bg-white p-6 shadow-lg rounded-2xl mt-4">
        <h2 className="text-2xl font-bold mb-4 text-center">5-Day Forecast</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {dailyForecast.map((day) => {
            const date = new Date(day.dt_txt).toLocaleDateString("en-GB", {
              weekday: "short",
              day: "2-digit",
              month: "short",
            });
            return (
              <div key={day.dt} className="p-4 bg-gray-100 rounded-lg text-center">
                <p className="font-semibold">{date}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].description}
                  className="mx-auto"
                />
                <p className="text-lg font-bold">
                  {Math.round(day.main.temp)}°C
                </p>
                <p className="text-sm">{day.weather[0].description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default Forecast;
  