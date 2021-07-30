function vowelsArr() {
    let verse = 'Я помню чудное мгновенье Передо мной явилась ты Как мимолетное виденье Как гений чистой красоты';
    let verseToArray = verse.split(' ');
    let randomArr = function (rand) {
       return Math.floor(Math.random() * rand.length)
    }
    return verseToArray[randomArr(verseToArray)].split();
}
vowelsArr();




