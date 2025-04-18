body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 600px;
  text-align: center;
}

#sample-text {
  font-size: 18px;
  margin-bottom: 20px;
}

#input-box {
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
  resize: none;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

#result {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #28a745;
}

@media (max-width: 480px) {
  #input-box {
    height: 80px;
  }

  #sample-text {
    font-size: 16px;
  }
}
