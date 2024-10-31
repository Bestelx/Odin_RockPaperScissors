

function getComputerChoice(){
    // this section of code is responsible for obtaining a random number from 1-3
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3)

    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
    //--------------------------------------------------------------------------------------

}