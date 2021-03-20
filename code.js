const onLoad = () => {
    const colorPicker = document.getElementById("nail-color");
    colorPicker.addEventListener("input", changeColor, false);
}

const changeColor = (event) => {
    console.log(event, "asda");
    const element = document.getElementById("nails");
    element.style.backgroundColor = event.target.value;
}