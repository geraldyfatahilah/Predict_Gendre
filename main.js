const base_api = "https://api.genderize.io";

function show_result(name, gender, probability) {
  const predictionElement = document.getElementById("prediction");
  const probabilityPercent = probability * 100;
  let convert = "";

  if (gender == "male") {
    convert = "pria";
  } else {
    convert = "wanita";
  }

  const predictionText = `Halo ${name} , Jenis Kelamin Kamu Kemungkinan Adalah ${convert} sebesar ${probabilityPercent}%`;

  predictionElement.textContent = predictionText;
}

async function predict(event) {
  if (event.key == "Enter") {
    const firstName = event.target.value;
    const queryUrl = `${base_api}/?name=${firstName}&country_id=ID`;

    const response = await fetch(queryUrl);
    const result = await response.json();

    show_result(result.name, result.gender, result.probability);
  }
}
