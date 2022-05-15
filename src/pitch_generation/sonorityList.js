export const sonorities = [];

export const sonorityList = (result) => {
    if (!sonorities.includes(result)) sonorities.push(result);
    console.log(sonorities);

    return sonorities;
}

export const getNextSonority = () => {
    console.log(sonorities);
    return sonorities;
}
