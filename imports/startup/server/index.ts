//here goes apis
Meteor.methods({
    findPivotIndex(numbers) {
        this.unblock()
        // Check validity of pivot() input and throw helpful error if not valid
        if (!Array.isArray(numbers)) {
            throw new Error("Argument must be an array");
        }

        // Must be all numbers
        // Determine if the given input is a number
        const isNumber = (number) => typeof number === "number"
        if (!numbers.every(isNumber)) {
            throw new Error("Every array element must be a number");
        }

        // Return the sum of the numbers in the given array
        const sum = (numbers) => numbers.reduce((acc, current) => acc + current, 0);
        let leftSum = 0, rightSum = sum(numbers);
        for (let i = 0; i < numbers.length; i++) {
            rightSum -= numbers[i];
            if (leftSum === rightSum) {
                return i;
            }
            leftSum += numbers[i];
        }
        return -1;
    }
})