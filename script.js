// Jose's Taco Truck
// The data is done. The page is not.

const truck = {
  name: "Jose's Taco Truck",
  tagline: "Same recipes, worse parking.",
  phone: "209-555-0147",
  soldOut: false
};

const special = {
  name: "Three birria tacos and a consome",
  price: 11.00,
  isFeatured: true
};

const schedule = [
  { day: "Monday", location: "Behind the laundromat on Pacific" },
  { day: "Tuesday", location: "Weber Ave, by the courthouse" },
  { day: "Wednesday", location: "Behind the laundromat on Pacific" },
  { day: "Thursday", location: "The lot on Hammer Lane" },
  { day: "Friday", location: "Victory Park, until we run out" }
];

const crew = ["Marisol", "Big Kevin", "Darnell"];

const todayIndex = 0;

// Your code goes below here.

const heading = document.getElementById("truck-name");

heading.textContent = truck.name;



const phoneNumber = document.getElementById("phone-number");

phoneNumber.textContent = truck.phone;



const tagline = document.getElementById("tagline");

tagline.textContent = truck.tagline;



const special2 = document.getElementById("special");

special2.textContent = special.name;



const price2 = document.getElementById("price");

function price3()
{
  price2.textContent = "$" + special.price;
}

price3();



const status2 = document.getElementById("status");

if (truck.soldOut == true)
{
  status2.textContent = "Sold Out for Now";
  status2.classList.add("closed");
}
else
{
  status2.textContent = "Open Now";
  status2.classList.remove("closed");
}

if (special.isFeatured == true)
{
  special2.classList.add("featured");
}
else
{
  special2.classList.remove("featured");
}


const crewList = document.getElementById("crew-list");

const crewList2 = [
  {name: "Marisol"},
  {name: "Big Kevin"},
  {name: "Darnel"}
];

crewList.classList.add("today");


for(let i = 0; i < crewList2.length; i++)
{
  const item = document.createElement("li");
  item.textContent = crewList2[i].name;
  crewList.appendChild(item);
}



const table = document.getElementById("table");



for(let i = 0; i < schedule.length; i++)
{
    const rowList = table.rows[i]

    rowList.cells[0].textContent = schedule[i].day;
    rowList.cells[1].textContent = schedule[i].location;

    const todayDay = rowList.cells[0];
    const todayLocation = rowList.cells[1];

    if(i === todayIndex)
    {
      todayDay.classList.add("today");
      todayLocation.classList.add("today");
    }
}



