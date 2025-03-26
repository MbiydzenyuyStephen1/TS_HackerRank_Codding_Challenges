//NAME OF THE PROBLEM: Time Conversion

    //Objective of the problem 
        //convert from from time from 12hr time to 24hr time


    //ALGORITHM
        //1. Get the last digits of the time
        //2. Get the the time excluding last two digits
        //3. Split the time
        //4. convert the split at index zero to number
        //5. where the value in period is AM and hour at index Zero is 12, hour takes 0
        //6. Else if hour is not 12 we add what ever is in hour with 12
        //7.Convert hour back to string

function timeConversion(s: string): string {

    const lastDigit: string = s.slice(-2);
    
    const timeExcludingLastCharacters: string = s.slice(0,-2);
    
    const splitedTime = timeExcludingLastCharacters.split(':');
    
    let hour = parseInt(splitedTime[0]);
    
    if( lastDigit === 'AM'){
        if( hour === 12){
            hour = 0;
        } else {
            if( hour !== 12 ){
                hour += 12;
            }
        }
    }
    
    const hourString = hour.toString().padStart(2, '0');
    
    
    return `${hourString}:${splitedTime[1]}:${splitedTime[2]}`
}