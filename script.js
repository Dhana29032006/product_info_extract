let extractedData = [];

function extractProducts() {
    extractedData = [];

    const products = document.querySelectorAll(".product");
    const tableBody = document.querySelector("#productTable tbody");
    tableBody.innerHTML = "";

    products.forEach(product => {
        const name = product.querySelector(".name").innerText;
        const price = product.querySelector(".price").innerText;
        const rating = product.querySelector(".rating").innerText;

        extractedData.push({ name, price, rating });

        const row = `
            <tr>
                <td>${name}</td>
                <td>${price}</td>
                <td>${rating}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function downloadCSV() {
    if (extractedData.length === 0) {
        alert("Please extract product data first.");
        return;
    }

    let csvContent = "Product Name,Price,Rating\n";

    extractedData.forEach(item => {
        csvContent += `${item.name},${item.price},${item.rating}\n`;
    });

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "products.csv";
    a.click();

    window.URL.revokeObjectURL(url);
}
