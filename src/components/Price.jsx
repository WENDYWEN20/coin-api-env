import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const params = useParams();
  const symbol = params.symbol;
  // Using the other two variables to create our URL.
  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
  //state tp hold the coin data.
  const [coin, setCoin] = useState("null");
  //Function to fetch coin data.

  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.log(e);
    }
  };

  //useEffect to run getCoin when component mounts.
  useEffect(() => {
    getCoin();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>
          {" "}
          {coin.asset_id_base}/{coin.asset_id_quote}{" "}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };
//Function fro when data doesn't exist.
const loading=()=>{
    return <h1>Loading....</h1>
}
return coin && coin.rate ? loaded():loading()
}
