const bobsFollowers = ["Ginny", "Anne", "Meg", "Jen"];
const hannahsFollowers = ["Rufus", "Anne", "Colin", "Jen"];

const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {

    for (let j = 0; j < hannahsFollowers.length; j++) {

        if (bobsFollowers[i] === hannahsFollowers[j]) {

            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}

console.log(mutualFollowers);