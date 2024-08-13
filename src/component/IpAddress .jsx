import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IpAddress = ({ type }) => {
  const [ip, setIp] = useState('');

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get(`https://api${type === 'ipv6' ? '6' : ''}.ipify.org?format=json`);
        setIp(response.data.ip);
      } catch (error) {
        console.error('Error fetching the IP address:', error);
      }
    };

    fetchIp();
  }, [type]);

  return (
    <div>
      <h3>Your Public {type.toUpperCase()} Address:</h3>
      <p>{ip}</p>
    </div>
  );
};

export default IpAddress;
