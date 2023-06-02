import React, { useState } from "react";

async function importexts() {
  const [imageInput, setimageInput] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

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
    setimageInput("");
  } catch (error) {
    // Consider implementing your own error handling logic here
    console.error(error);
    alert(error.message);
  }

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <Row>
          <Col xs={12} md={8}>
            <Form.Control
              name="searchInput"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              size="lg"
              placeholder="Enter your prompt"
            />
          </Col>
          <Col xs={12} md={4}>
            <Button type="submit" variant="success" size="lg">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default importexts;
