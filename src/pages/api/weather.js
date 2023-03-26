import axios from "axios";

export default async function handler(req, res) {
  try {
    const lat = 36.752887;
    const lng = 3.042048;
    const params = "airTemperature";
    const response = await axios.get(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
      {
        headers: {
          Authorization:
            "7cac9e96-c182-11ed-bc36-0242ac130002-7cac9f4a-c182-11ed-bc36-0242ac130002",
        },
      }
    );
    console.log("hello, I am the API endpoint");
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching weather data" });
  }
}
