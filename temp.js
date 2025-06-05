function calc() {
    // ✅ Get the input value when button is clicked
    var temp = document.getElementById("inp").value;

    // ✅ Convert Celsius to Fahrenheit
    var result = (temp * 9 / 5) + 32;

    // ✅ Display the result
    document.getElementById("res").textContent = "🌡️ Fahrenheit: "+ result.toFixed(2) +"°F";
}
