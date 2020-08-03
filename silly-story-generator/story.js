const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House "];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

function result() {
    let text = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
    if (customName.value !== '') {
        let name = customName.value;
        text = text.replace("Bob", name);
    }
    if (document.getElementById("uk").checked) {
        let weight = Math.round(300 * 0.0714286);
        let temperature = Math.round((94 - 32) * 5 / 9);
        text = text.replace("300 pounds", weight + " stone");
        text = text.replace("94 fahrenheit", temperature + " centigrade");
    }
    text = text.replaceAll(":insertx:", randomValueFromArray(insertX));
    text = text.replace(":inserty:", randomValueFromArray(insertY));
    text = text.replace(":insertz:", randomValueFromArray(insertZ));

    story.textContent = text;
    story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);