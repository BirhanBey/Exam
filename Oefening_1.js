var rl = require("readline-sync");

function Oefening1() {
  const name = rl.question("what is yor name? ");
  const surname = rl.question("What is your surname? ");
  const address = rl.question("What is your address adn box number? ");
  const postcode = rl.question("What is your postcode? ");
  const municipality = rl.question("What is municipality ");

  if (
    name.length == 0 ||
    surname.length == 0 ||
    address.length == 0 ||
    postcode.length == 0 ||
    municipality.length == 0
  ) {
    return "Minstens één van de ingevulde velden is niet geldig!";
  } else if (
    name.length > 40 ||
    surname.length > 40 ||
    address.length > 40 ||
    postcode.length > 40 ||
    municipality.length > 40
  ) {
    return "Kader is te breed. Gebruik afkortingen in de breedste stukken.";
  } else if (postcode < 1000 || postcode > 9900) {
    return "Minstens één van de ingevulde velden is niet geldig!";
  } else {
    let topBottomLine = "";
    let line01 = "";
    let line02 = "";
    let line03 = "";
    let lastName = "";
    let lastSurname = "";

    lastName = name[0].toUpperCase() + ".";
    lastSurname = surname[0].toUpperCase() + surname.substring(1);
    let lastNameSurname = lastName + " " + lastSurname;

    for (let i = 0; i < 44 - lastNameSurname.length; i++) {
      if (i == 2) {
        line01 += lastNameSurname;
      } else {
        line01 += " ";
      }
    }
    for (let i = 0; i < 44 - address.length; i++) {
      if (i == 2) {
        line02 += address;
      } else {
        line02 += " ";
      }
    }
    const pgSum = postcode.length + municipality.length+1;

    for (let i = 0; i < 44 - pgSum; i++) {
      if (i == 2) {
        line03 += postcode + " " + municipality;
      } else {
        line03 += " ";
      }
    }
    for (let i = 0; i < line01.length; i++) {
      topBottomLine += "-";
    }

    return (
      topBottomLine +
      "\n|" +
      line01 +
      "|\n|" +
      line02 +
      "|\n|" +
      line03 +
      "|\n" +
      topBottomLine
    );
  }
}

console.log(Oefening1());
