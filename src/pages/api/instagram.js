import axios from "axios";

export default async function handler(req, res) {
  try {
    const redirectURI = "https://localhost:3001/gallery";
    const clientID = process.env.INSTA_API_ID;
    const clientKey = process.env.INSTA_API_KEY;
    const { code } = req.query;
    console.log(clientID);
    const response = await axios.post(
      "https://api.instagram.com/oauth/access_token",
      {
        client_id: clientID,
        client_secret: clientKey,
        grant_type: "authorization_code",
        redirect_uri: redirectURI,
        code,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching access token" });
  }
}
