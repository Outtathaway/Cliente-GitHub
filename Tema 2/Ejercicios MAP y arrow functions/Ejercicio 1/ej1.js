let random = (num) =>
{
    random = Math.floor(Math.random() * (num - 1) +1)
    return random
}
console.log(random(10))