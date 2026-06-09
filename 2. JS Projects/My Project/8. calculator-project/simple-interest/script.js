function calculateSI() {
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("time").value);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        return alert("Please enter all values");
    }

    let si = (p * r * t) / 100;
    let total = p + si;

    console.log(si, total);
    document.getElementById("result").innerText =
        `Interest: ${si.toFixed(2)} | Total: ${total.toFixed(2)}`;
}
