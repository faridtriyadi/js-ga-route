function distance(city1, city2) {
    let dx = city1.x - city2.x;
    let dy = city1.y - city2.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function totalDistance(route) {
    let dist = 0;
    for (let i = 0; i < route.length - 1; i++) {
        dist += distance(route[i], route[i + 1]);
    }
    dist += distance(route[route.length - 1], route[0]);
    return dist;
}

function mutate(route) {
    let i = Math.floor(Math.random() * route.length);
    let j = Math.floor(Math.random() * route.length);
    [route[i], route[j]] = [route[j], route[i]];
}

function crossover(parent1, parent2) {
    let start = Math.floor(Math.random() * parent1.length);
    let end = Math.floor(Math.random() * parent1.length);
    if (start > end) [start, end] = [end, start];

    let child = parent1.slice(start, end);
    parent2.forEach(city => {
        if (!child.includes(city)) child.push(city);
    });
    return child;
}
