// Establish dates:

const birthDate = new Date("06/09/1998")
const todaysDate = new Date("08/07/2023")

// Convert dates to milliseconds:

const birthDateInMs = birthDate.getTime()
const todaysDateInMs = todaysDate.getTime()

// The difference between dates in milliseconds:

const msDiff = todaysDateInMs - birthDateInMs

// Rounds milliseconds back up to days using FUNCTION:

const aDayInMs = 24 * 60 * 60 * 1000

const diff = Math.round(
    msDiff / aDayInMs
    )

// Display Num. of Days using console log:

console.log(diff)

// Add a Template Literal with a STRING to make the output understandable to the user:

console.log(`I am ${diff} days old as of 07/07/2023!`)