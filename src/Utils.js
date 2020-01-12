const someCommonValues = ['getCoinDenominations', 'justAnAlert'];

export const getCoinDenominations = (dollarInput) => {

    let fract = (dollarInput+"").indexOf(".") !== -1
        ? ((dollarInput+"").substring((dollarInput+"").indexOf(".")+1))
        : 0;
    let dollarBill = Math.trunc(dollarInput);
    let halfDollar = 0;
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny;

    while(fract >= 50) {
        halfDollar++;
        fract = fract - 50;
    }
    while(fract >= 25) {
        quarter++;
        fract = fract - 25;
    }
    while(fract >= 10) {
        dime++;
        fract = fract - 10;
    }
    while(fract >= 5) {
        nickel++;
        fract = fract - 5;
    }

    penny = fract;

    let denominations = {
        "silverDollar": dollarBill,
        "half-dollar": halfDollar,
        "quarter": quarter,
        "dime": dime,
        "nickel": nickel,
        "penny": penny
    };

    return denominations;

};

export const justAnAlert = () => {
    // alert('hello');
};
