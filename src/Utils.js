export const Values = ['getCoinDenominations'];

export const getCoinDenominations = (dollarInput) => {

    let fractionValue = (dollarInput+"").indexOf(".") !== -1
        ? ((dollarInput+"").substring((dollarInput+"").indexOf(".")+1))
        : 0;
    let dollarBill = Math.trunc(dollarInput);
    let halfDollar = 0;
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny;

    while(fractionValue >= 50) {
        halfDollar++;
        fractionValue = fractionValue - 50;
    }
    while(fractionValue >= 25) {
        quarter++;
        fractionValue = fractionValue - 25;
    }
    while(fractionValue >= 10) {
        dime++;
        fractionValue = fractionValue - 10;
    }
    while(fractionValue >= 5) {
        nickel++;
        fractionValue = fractionValue - 5;
    }

    penny = fractionValue;

    let denominations = {
        "silverDollar": dollarBill,
        "halfDollar": halfDollar,
        "quarter": quarter,
        "dime": dime,
        "nickel": nickel,
        "penny": penny
    };

    return denominations;

};
