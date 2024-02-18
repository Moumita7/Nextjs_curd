"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const create = () => {
  let router = useRouter();
  let [data, setData] = useState({
    userId: "",
    title: "",
    body: "",
  });

  let handleChange = (e) => {
    // setData({...data,[e.target.name]: e.target.value})
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data)
    try {
      // const response = await axios.post('https://jsonplaceholder.typicode.com/posts',{data});
      console.log("ddt", data);
      const response = await axios.post("http://localhost:5000/posts", data);
      // console.log("res",response)
      setData({ userId: "", title: "", body: "" });
      router.push("/read");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="userId"
          name="userId"
          value={data.userId}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="title"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="body"
          name="body"
          value={data.body}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default create;
