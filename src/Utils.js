export const Values = ['getCoinDenominations'];

{/* Calculates minimum denominations for entered dollar value */}
export const getCoinDenominations = (dollarInput) => {

    {/* convert fraction in to integer ro subtract required amount */}
    let fractionValue = (dollarInput+"").indexOf(".") !== -1
        ? ((dollarInput+"").substring((dollarInput+"").indexOf(".")+1))
        : 0;

    {/* since we have silver dollar, we can directly remove fraction in entered amount */}
    let dollarBill = Math.trunc(dollarInput);
    let halfDollar = 0;
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny;

    {/* It subtracts each larger amount then descends to lower amount
     when entered fraction values reached penny level  */}
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
