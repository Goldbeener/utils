function intersectionObjects2(a, b, equalFunction) {
    const results = [];
    for (let i = 0; i < a.length; i++) {
        const itemA = a[i];
        const isInB = b.some((itemB) => equalFunction(itemA, itemB));
        if (isInB) {
            results.push(itemA);
        }
    }
    return results;
}

function intersectionObjects() {
    let results = arguments[0];
    const lastParam = arguments[arguments.length-1];
    let paramLength = arguments.length;
    let equalFunction = (a, b) => a === b;

    if (typeof lastParam === 'function') {
        equalFunction = lastParam;
        paramLength--;
    }

    for (let i = 1; i < paramLength; i++) {
        results = intersectionObjects2(results, arguments[i], equalFunction);
        if (results.length === 0) break;
    }

    return results;
}

var a = [ { id: 1, name: 'jake' }, { id: 4, name: 'jenny'} ];
var b = [ { id: 1, name: 'jake' }, { id: 9, name: 'nick'} ];
var c = [ { id: 1, name: 'jake' }, { id: 4, name: 'jenny'}, { id: 9, name: 'nick'} ];

var result = intersectionObjects(a, b, c, function(item1, item2) {
    return item1.id === item2.id;
});

console.log(result);
