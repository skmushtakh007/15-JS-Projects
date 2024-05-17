function generateColor() {
    // Generate random hexadecimal color code
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16); // 16777215 is the decimal equivalent of the hexadecimal value FFFFFF
    
    

    // Set the background color of the color box
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = color;

    // Display the color code
    const colorText = document.getElementById('colorText');
    colorText.textContent = 'Hex Color: ' + color;

    // Heading color
    const colorH = document.querySelector('.head-color');
    colorH.style.color = color;
}

function changeColor() {
    // Generate random RGB values between 0 and 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);


    const color1 = `rgb(${r}, ${g}, ${b})`;

    const colorText = document.getElementById('colorText');
    colorText.textContent = 'Hex Color: ' + color1;


    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = color1;
    
     // Heading color
     const colorH = document.querySelector('.head-color');
     colorH.style.color = color1;

}
