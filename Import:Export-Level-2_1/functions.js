export function filteredDataBig (item) {
    const newBig = item.filter((elem) => elem.population >= 100000);
    return newBig;
};

export function filteredDataSmall (item) {
    const newSmall = item.filter((elem) => elem.population < 100000);
    return newSmall;
};

