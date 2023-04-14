const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post('/api/login', async (req, res) => {
    const {signature, message, address} = req.body;
    
    const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY'); // Replace with your Infura API key

try {
  const recoveredAddress = await web3.eth.personal.ecRecover(message, signature);
  
  if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
    // The user is authenticated, proceed with your logic (e.g., create a session, store user data, etc.)
  } else {
    res.status(401).json({message: 'Unauthorized'});
  }
} catch (error) {
  res.status(500).json({message: 'Server error'});
}
  
  });