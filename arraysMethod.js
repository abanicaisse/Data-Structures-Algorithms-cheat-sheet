const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// forEach
companies.forEach(function (company, index, companies) {
    console.log(company.name);
});




// Without .filter
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}

//// With .filter Get 21 and older
const canDrinks = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
});
const cansDrink = ages.filter((age) => age >= 21);
console.log(cansDrink);


//// Filter Retail companies
const retailCompanies = companies.filter(function (company) {
  if (company.category == "Retail") {
    return true;
  }
});

const retailsCompanies = companies.filter(
  (company) => company.category == "Retail"
);
console.log(retailCompanies);


//// Get 80s companies
const eightiesComapnies = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
);
console.log(eightiesComapnies);

//// Get Companies that lasted more than 10 years
const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(lastedTenYears);




// map
////Create array of company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

const testMap = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);
console.log(testMap);

const agesMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
console.log(agesMap);




// sort
const sortCompanies = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

////Sort ages
const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);




// reduce
// without .reduce
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
console.log(ageSum);

// with .reduce
const ageSums = ages.reduce(function (total, age) {
  return total + age;
}, 0);

const agesSum = ages.reduce((total, age) => total + age, 0);
console.log(agesSum);

////Get total years for all companies
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalYears);




//Combine Methods
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((sum, age) => sum + age, 0);

console.log(combined);
