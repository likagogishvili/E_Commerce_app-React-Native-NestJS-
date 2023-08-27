import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { FurnitureData } from "../types/dataTypes";
import axios from "axios";

function UseFetch() {
  const [furniture, setFurniture] = useState<FurnitureData[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | unknown>();
  const url = "http://localhost:3000/furniture";
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setFurniture(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refreshData = () => {
    setIsLoading(true);
    fetchData();
  };
  return { furniture, isLoading, error, refreshData };
}

export default UseFetch;
