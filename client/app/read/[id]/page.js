
// "use client"; 

// import axios from "axios";
// import { useEffect, useState } from "react";

// const EditProductPage = ({params}) => {
//     let [data, setData] = useState();

//     let fetchSingleData=async()=>{
//         let res=await axios.get(`http://localhost:5000/posts/${params.id}`)
//         console.log(res.data)
//         setData(res.data)
//     }
//     let handleAdd = (e) => {
//         setData({ ...data, [e.target.name]: e.target.value });
//       };
//     useEffect(()=>{
// fetchSingleData()
//     },[])
//     let handleSubmit=async()=>{
//         e.preventDefault();
//         try {
//           await axios.put(`http://localhost:5000/posts/${params.id}`, data);
//           alert("Product updated successfully!");
//         } catch (error) {
//           console.error("Error updating product:", error);
//         }
//     }
  

//     return (
//         <div>
//             <h1>Edit Product {params.id}</h1>
//             {/* Add your edit form or content here */}
//             <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="userId" name="userId" value={data && data.userId}            onChange={handleAdd} />
//       <input type="text" placeholder="title" name="title" value={data && data.title}            onChange={handleAdd}/>
//       <input type="text" placeholder="body" name="body" value={data && data.body}            onChange={handleAdd}/>
//       <input type="submit" />

//     </form>
//         </div>
//     );
// };

// export default EditProductPage;


"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditProductPage = ({ params }) => {
    let router=useRouter()
  const [data, setData] = useState({
    userId: "",
    title: "",
    body: ""
  });

  useEffect(() => {
    fetchSingleData();
  }, []);

  const fetchSingleData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/posts/${params.id}`);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/posts/${params.id}`, data);
      alert("Product updated successfully!");
      router.push("/read")
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <h1>Edit Product {params.id}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="userId"
          name="userId"
          value={data.userId}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="title"
          name="title"
          value={data.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="body"
          name="body"
          value={data.body}
          onChange={handleInputChange}
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProductPage;
