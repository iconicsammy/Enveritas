export function formatToNumber(value: number, decimalPoints: number = 2) {
    //TODO: this could be attached to the user's location such as UGANDA or Cambodia
    return value.toLocaleString(undefined, {
        minimumFractionDigits: decimalPoints,
        maximumFractionDigits: decimalPoints
    });
}

//TODO: IMPLEMENT logic so that for e.g. "whats your name" becomes may be whatsyourname?
export function labelToUIElementName(label: string){
    return label;
}