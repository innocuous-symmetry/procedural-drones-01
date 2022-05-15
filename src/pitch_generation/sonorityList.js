export const sonorities = [];

export const sonorityList = (result) => {
    if (!sonorities.includes(result)) sonorities.push(result);
    console.log(sonorities);

    return sonorities;
}

export const getNextSonority = () => {
    if (!sonorities.length) return;

    let shifted = sonorities.shift();
    console.log(shifted);

    return shifted;
}
