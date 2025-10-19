let limit = +prompt("Enter number");
for (let number = 1; number <= 100; ++number) {
    let valueInPower = number ** 2;
    if (valueInPower > limit) {
        break;
    } else {
        console.log(valueInPower);
    }
}