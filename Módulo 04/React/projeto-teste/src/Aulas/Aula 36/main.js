import axios from "axios";
/*import { useEffect, useState } from "react";*/

async function fetchData() {
  try {
    const response = await axios.get("http://192.168.137.1:3000/qtd");
    console.log("Data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function fetchAlbum(id) {
  try {
    const response = await axios.get(`http://192.168.137.1:3000/albums/${id}`);
    console.log("Data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function fetchAlbums() {
  try {
    const response = await axios.get(`http://192.168.137.1:3000/albums`);
    console.log("Data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function postAlbum(dados) {
  try {
    const response = await axios.post(
      `http://192.168.137.1:3000/albums`,
      dados
    );
    console.log("Data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function deleteAlbum(id) {
  try {
    const response = await axios.delete(
      `http://192.168.137.1:3000/albums/${id}`
    );
    console.log("Data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

/*
export default function DataComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) return <div>Error loading data</div>;
  return <div>{JSON.stringify(data)}</div>;
}
*/

fetchData();
fetchAlbum(5);
postAlbum({ title: "nome", artist: "nome", year: "0000", rating: "00" });
fetchAlbums();
//deleteAlbum(10);
