import axios from "axios";

export default async function handler(req, res) {
  try {
    const token = req.query.token;
    const response = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption&access_token=${token}`
    );
    console.log("hello, I am the API endpoint");
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching weather data" });
  }
}
