import axios from "axios";
import React, { useEffect, useState } from "react";

function Networks() {
  const [networks, setNetworks] = useState([]);

  useEffect(() => {
    const getNetworks = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-api-drab.vercel.app/api/networks"
        );
        setNetworks(data.networks);
      } catch (error) {
        console.log(error);
      }
    };
    getNetworks();
  }, []);

  return (
    <div className="network__icons">
      <ul>
        {networks &&
          networks.map((network) => (
            <li>
              <a href={network.url} target="_blank" key={network._id}>
                <img src={network.icon} alt={network.url} />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Networks;
