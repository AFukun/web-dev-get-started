let input = document.querySelector("input");
let list = document.querySelector("ul");

function debounce(func, delay) {
    let timer;
    return () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, delay);
    };
    /* 独立思考，拒绝剽窃，不懂就问 */
};

input.addEventListener("input", debounce(fetchAndAdd, 500));

async function fetchAndAdd() {
    let load = document.createElement("p");
    load.textContent = "Loading..."

    list.innerHTML = "";
    list.appendChild(load);
    fetch("https://swapi.dev/api/people/?search=" + input.value).then(function (response) {
        return response.json();
    }).then(function (json) {
        const names = json.results;
        //console.log(names);
        if (names.length === 0)
            load.textContent = "No results.";
        else {
            list.innerHTML = "";
            for (let i = 0; i < names.length; i++) {
                let newitem = document.createElement("li");
                newitem.textContent = names[i].name;
                list.appendChild(newitem);
            }
        }
    });
}
