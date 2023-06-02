import React, { useState } from "react";
function Body() {
  const [imageInput, setImageInput] = useState("");
  const [result, setResult] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageInput }),
      });
      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error || new Error(`Request failed with status ${response.status}`)
        );
      }
      setResult(data.result);
      setImageInput("");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  return (
    <div>
      {/* image spot */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={imageInput}
          onChange={(e) => setImageInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Body;














