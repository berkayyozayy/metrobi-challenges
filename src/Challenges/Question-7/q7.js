//Goal *
//Take item much as possible not already taken knapsack
//Algorithm **
//Step 1 : Sort array and find the minimum kg
//Step 2 : Find the density and sort on density
//Step 3 : While minimum kg smaller or equal than capacity, continue
//Step 4 : If kg smaller or equal than capacity
        // Item count equal to capacity divided by kg
        // Benefit value equal to item count multiply by price
        // Decrease the capacity
//Step 5 : Return benefit value

//Note ***
//Given ( Example of Question 7) data  we don't need to step 1.
//Because when we sorted on density we access the minimum kg and maximum density item.
//We can take same result.
//But, we must appyly other data sets for dynamic programming.

const carrotTypes = [
    { kg: 5, price: 100 },
    { kg: 7, price: 150 },
    { kg: 3, price: 70 }
];

const capacity = 36;


const getMaxValue = (carrotTypes, capacity) => {

    carrotTypes.sort((a,b) => (a.kg - b.kg))

    // Find density and sorted on density.
    carrotTypes.forEach(item => item.density = item.price / item.kg)
    carrotTypes.sort((a, b) => b.density - a.density)

    //We get min kg which is equal to 3
    const minKg = carrotTypes[0].kg;

    let i = 0
    let benefitValue = 0; 

    // We will continue up to capacity limit
    while (minKg <= capacity && i < carrotTypes.length) {


        let { kg, price } = carrotTypes[i];

        if (kg <= capacity) {
            let itemCount = capacity / kg
            benefitValue += itemCount * price
            capacity -= itemCount * kg
        }

        i++;
    }

    return benefitValue;

}

const maxValue = getMaxValue(carrotTypes, capacity);
console.log(` Max value is : ${maxValue}`);