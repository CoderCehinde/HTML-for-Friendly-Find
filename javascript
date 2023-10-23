var alternatives = {
    "Plastic Straws": {
        alternative: "Stainless steel or bamboo straws",
        image: "url_to_stainless_steel_or_bamboo_straws_image.jpg"
    },
    "Plastic Bags": {
        alternative: "Reusable cloth bags",
        image: "url_to_reusable_cloth_bags_image.jpg"
    }
};

function findAlternative() {
    var productInput = document.getElementById("productInput").value.toLowerCase();
    var resultDiv = document.getElementById("result");
    var alternativeObj = alternatives[productInput];

    if (alternativeObj) {
        resultDiv.textContent = "Eco-Friendly Alternative: " + alternativeObj.alternative;
        var imageElement = document.createElement("img");
        imageElement.src = alternativeObj.image;
        resultDiv.appendChild(imageElement);
    } else {
        resultDiv.textContent = "No alternative found. Please try another product.";
    }
}
