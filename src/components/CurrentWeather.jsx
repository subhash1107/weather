const CurrentWeather = ({ weatherData }) => {
    if (!weatherData) return null;
  
    const { name, main, weather, wind } = weatherData;
  
    return (
      <div className="bg-white p-6 shadow-lg rounded-2xl text-center my-4">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-xl">{weather[0]?.description}</p>
        <h1 className="text-5xl font-extrabold my-4">
          {Math.round(main?.temp)}°C
        </h1>
        <div className="flex justify-around mt-4">
          <div>
            <p className="font-semibold">Humidity</p>
            <p>{main?.humidity}%</p>
          </div>
          <div>
            <p className="font-semibold">Wind Speed</p>
            <p>{wind?.speed} m/s</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CurrentWeather;
  