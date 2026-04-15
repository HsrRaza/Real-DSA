// JavaScript Optional Chaining (ES2020) simplifies safe access to deeply nested object properties by preventing errors when values are null or undefined.

// Optional Chaining (ES2020) safely accesses properties or calls functions on null or undefined values.
// Safely accesses nested properties without runtime errors.
// Eliminates the need for explicit null or undefined checks.
// Improves code readability and cleanliness.


// ex 

const user = {
    profile:{
        address:{
            street:"main st",
        }
    }
}
// old way  - lot of checks 

let stret;
if(user && user.profile && user.profile.address){
    street = user.profile.address.street;
}

// new way - optional chaining
const street = user?.profile?.address?.street; // "main st"
console.log(street);
