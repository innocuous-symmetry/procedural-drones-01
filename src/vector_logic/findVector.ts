export const findVector = (pitches: number[]) => {
    let sorted = pitches.sort((x,y) => x - y);

    // finds each interval and logs it as a duple
    let intervalClasses: number[] = [];
    for (let i = 0; i < sorted.length; i++) {
        let j = i+1;

        // does not allow out of range values in the proceeding loop
        if (j >= sorted.length) {
            break;
        }

        do {
            let thing: number = (sorted[j] - sorted[i]) % 6
            if (!(intervalClasses.includes(thing))) {
                intervalClasses.push(thing);
            }
            j++;
        } while (j < sorted.length);
    }

    intervalClasses = intervalClasses.sort((x,y) => x-y);

    return intervalClasses;
}