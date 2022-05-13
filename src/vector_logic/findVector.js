// takes pitches as numbers and converts them to a vector
export const findVector = (pitches) => {
    let sorted = pitches.sort((x,y) => x - y);

    // finds each interval and logs it as a duple
    let intervalClasses = [];
    for (let i = 0; i < sorted.length; i++) {
        let j = i+1;

        // does not allow out of range values in the proceeding loop
        if (j >= sorted.length) {
            break;
        }

        do {
            let interval = (sorted[j] - sorted[i]);
            if (interval > 6) {
                interval = 12 - interval;
            }
            
            if (!(intervalClasses.includes(interval))) {
                intervalClasses.push(interval);
            }
            j++;
        } while (j < sorted.length);
    }

    intervalClasses = intervalClasses.sort((x,y) => x-y);
    return intervalClasses;
}
