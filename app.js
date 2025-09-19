const connectButton = document.getElementById("connectButton");
const walletAddress = document.getElementById("walletAddress");
const balanceText = document.getElementById("balanceText");

connectButton.addEventListener("click", async () => {
  if (window.ethereum) {
    try {
      // 1. Request wallet connection
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      walletAddress.innerText = `Wallet Address: ${accounts[0]}`;

      // 2. Get balance
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      });

      // Convert balance from hex wei → ETH (2 decimals)
      const ethBalance = (parseInt(balance, 16) / 1e18).toFixed(2);
      balanceText.innerText = `Balance: ${ethBalance} ETH`;

    } catch (err) {
      console.error(err);
      alert("Failed to connect wallet or fetch balance.");
    }
  } else {
    alert("MetaMask not installed! Please install MetaMask extension.");
  }
});
