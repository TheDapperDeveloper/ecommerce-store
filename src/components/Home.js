import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Home() {
  const [carInfo, setCarInfo] = useState([]);
  useEffect(() => {
    carDatabaseInfo();
  }, []);

  const carDatabaseInfo = async () => {
    const { data, error } = await supabase.from("Cars").select("*");
    setCarInfo(data);
    console.log(data);
    if (error) console.log("error", error);
  };

  return (
    <div>
      {carInfo.map((car) => (
        <img src={car.Image} alt=""></img>
      ))}
    </div>
  );
}
