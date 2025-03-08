document.addEventListener("DOMContentLoaded", function () {
    let output = document.getElementById("output");

    function createPromise(index) {
        return new Promise(resolve => {
            let time = (Math.random() * 2 + 1).toFixed(3);
            setTimeout(() => resolve({ index, time }), time * 1000);
        });
    }

    let promises = [createPromise(1), createPromise(2), createPromise(3)];

    Promise.all(promises).then(results => {
        output.innerHTML = "";
        results.forEach(result => {
            let row = `<tr><td>Promise ${result.index}</td><td>${result.time}</td></tr>`;
            output.innerHTML += row;
        });

        let totalTime = Math.max(...results.map(r => parseFloat(r.time))).toFixed(3);
        output.innerHTML += `<tr><td>Total</td><td>${totalTime}</td></tr>`;
    });
});

