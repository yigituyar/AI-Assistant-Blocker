const toggleSwitch = document.getElementById("toggleSwitch");

// Popup açıldığında kayıtlı durumu yükle (Varsayılan: false / kapalı)
chrome.storage.local.get(["isBlocked"], (result) => {
  toggleSwitch.checked = result.isBlocked === true;
});

// Switch değiştirildiğinde yeni durumu kaydet
toggleSwitch.addEventListener("change", () => {
  chrome.storage.local.set({ isBlocked: toggleSwitch.checked });
});