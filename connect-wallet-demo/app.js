const connectButton = document.getElementById("connectButton");
const walletAddress = document.getElementById("walletAddress");

connectButton.addEventListener("click", async () => {
if (window.ethereum) {
try {
const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
walletAddress.innerText = `Wallet Address: ${accounts[0]}`;
} catch (error) {
console.error("User rejected connection");
}
} else {
alert("MetaMask not installed!");
}
});