//Add a greeting to each object representing a person

function greetDevelopers(list) {
    for(let person of list) {
      person.greeting = (`Hi ${person.firstName}, what do you like the most about ${person.language}?`);
    }
    return list;
}