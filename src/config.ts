const apikey = "f8fc1290-5724-11ea-a094-0932e3838ded";
const fields = "culture,century,title,images,id,people,classification";

export const initialHarvardUri = `https://api.harvardartmuseums.org/object?q=accessionyear:>=2019&apikey=${apikey}&hasimage=1&size=3&fields=${fields}`;
