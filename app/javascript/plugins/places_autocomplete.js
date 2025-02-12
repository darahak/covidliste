import places from "places.js";

const placesAutocomplete = (appId, apiKey) => {
  // User Form
  const addressInput = document.getElementById("user_address");
  if (addressInput) {
    places({
      container: addressInput,
      appId: appId,
      apiKey: apiKey,
    }).configure({
      language: "fr",
      countries: ["fr"],
    });
  }

  // Vaccination Center Signup Form
  const centerAddressInput = document.getElementById(
    "vaccination_center_address"
  );
  const centerLatInput = document.getElementById("vaccination_center_lat");
  const centerLonInput = document.getElementById("vaccination_center_lon");
  if (centerAddressInput) {
    let p = places({
      container: centerAddressInput,
      appId: appId,
      apiKey: apiKey,
    }).configure({
      language: "fr",
      countries: ["fr"],
    });
    p.on("change", function (e) {
      let latlng = e.suggestion.latlng;
      centerLatInput.value = latlng["lat"];
      centerLonInput.value = latlng["lng"];
    });
  }
};

export { placesAutocomplete };
