for (let year = 2014; year <= 2050; year++) {
    const date = new Date(year, 0, 1); 
    if (date.getDay() === 0) { 
        console.log(`1st January ${year} is a Sunday.`);
    }
}
