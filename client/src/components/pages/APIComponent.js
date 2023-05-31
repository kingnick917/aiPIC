
import '../App.css'; 
// import Head from "next/head";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
// import styles from "./index.module.css";

// export default function APIComponent() {
//   const [imageInput, setImageInput] = useState("");
//   const [result, setResult] = useState();

//   async function onSubmit(event) {
//     event.preventDefault();
//     try {
//       const response = await fetch("/api/generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ image: imageInput }),
//       });

//       const data = await response.json();
//       if (response.status !== 200) {
//         throw data.error || new Error(`Request failed with status ${response.status}`);
//       }

//       setResult(data.result);
//       setImageInput("");
//     } catch(error) {
//       // Consider implementing your own error handling logic here
//       console.error(error);
//       alert(error.message);
//     }
//   }


  function APIComponent() {
        const [prompt, setPrompt] = useState("");
        const [result, setResult] = useState("");
        const [loading, setLoading] = useState(false);
    
        const [placeholder, setPlaceholder] = useState(
          "Search for a cougar with Fast Car driving towards a sunset..."
        );
    
        const configuration = new Configuration({
          apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });
      
        const openai = new OpenAIApi(configuration);
      
        const generateImage = async () => {
          setPlaceholder(`Search ${prompt}..`);
          setLoading(true);
    
          try {
            const res = await openai.createImage({
              prompt: prompt,
              n: 1,
              size: "512x512",
            });
    
            setLoading(false);
            setResult(res.data.data[0].url);
          } catch (error) {
            setLoading(false);
            console.error(`Error generating image: ${error.response.data.error.message}`);
          }
        };
  


        return (
            <div className="container">
              { loading ? (
              <>
                <h3>Generating image... Please Wait...</h3>
              </>
              ) : (
              <>
                <h2>Generate an Image using Open AI API</h2>
      
                <textarea
                  className="app-input"
                  placeholder={placeholder}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows="10"
                  cols="100"
                />
      
                <button onClick={generateImage}>Generate an Image</button>
      
                { result.length > 0 ? (
                  <img className="result-image" src={result} alt="result" />
                ) : (
                  <>
                  </>
                )}
              </>
              )}
            </div>
          )
      }
      
      export default APIComponent

