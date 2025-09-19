const connectButton = document.getElementById("connectButton");
const walletAddress = document.getElementById("walletAddress");
const balanceText = document.getElementById("balanceText");

connectButton.addEventListener("click", async () => {
  if (window.ethereum) {
    try {
      // Request accounts
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      walletAddress.innerText = `Wallet Address: ${accounts[0]}`;

      // Get balance
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      });

      const ethBalance = parseInt(balance, 16) / 10**18;
      balanceText.innerText = `Balance: ${ethBalance} ETH`;

    } catch (err) {
      console.error(err);
      alert("Failed to connect wallet");
    }
  } else {
    alert("MetaMask not installed! Please install MetaMask.");
  }
});
