import { useEffect, useState } from "react";

const Hooks = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Secret-Asif/services-json/main/services.JSON"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};
export default Hooks;
