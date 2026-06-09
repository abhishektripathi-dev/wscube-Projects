function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: "en",
            // layout: google.translate.TranslateElement.InlineLayout
            //     .SIMPLE,
        },
        "google_translate_element",
    );
}

function syncText() {
    const source = document.getElementById("engInput").value;
    const target = document.getElementById("translateMe");

    if (source.trim() === "") {
        target.innerText = "Your translation will appear here...";
    } else {
        target.innerText = source;
    }
}
