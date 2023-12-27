const WRING_OUT_TIME = 500;
const SQUATTING_TIME = 200;

function wringOut(count){
    return new Promise((resolve, reject) => {
        if(count > 100){
            reject(new Error("Слишком много отжиманий"));
        }
        setTimeout(() => {
            resolve();
        }, count * WRING_OUT_TIME);
    });
}

function squatting(count){
    return new Promise((resolve, reject) => {
        if(count > 1000){
            reject(new Error("Слишком много приседаний"));
        }
        setTimeout(() => {
            resolve();
        }, count * SQUATTING_TIME);
    })
}

console.log("Начать тренировку");
wringOut(10)
    .then(() => {
        console.log("Разминка 5 минут");
    })
wringOut(30)
    .then(() => {
    console.log("Отжался 10 раз");
    return squatting(1001); 
})
    .then(() => {
    console.log("Присел 20 раз!");
});;
wringOut(40).then(() => {
    console.log("Ходьба 10 минут");
})
.catch(() => {
    console.log("Устал... Не могу дальше!");
});
