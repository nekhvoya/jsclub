let m = [
    [0,  1,  2,  3,  4],
    [5,  6,  7,  8,  9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19]
];

let spiral = function (m) {

    let n = [];
    while (m.length > 0) {
        let up = m.shift();
        up.forEach(el => n.push(el));

        for (let j = 0; j < m.length - 1; j++) {
            n.push(m[j].pop());
        }

        let down = m.pop();
        down = down.sort((e1, e2) => e2 - e1);
        down.forEach(el => n.push(el));

        for (let j = m.length - 1; j >= 0; j--) {
            n.push(m[j].shift());
        }
    }
    console.log(n);
};

spiral(m);
