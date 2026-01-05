const url = 'https://newsapi.org/v2/everything?q=tesla&from=2025-12-05&sortBy=publishedAt&apiKey=7912e5277f974321b02406e982016dba'

async function getdata () 
{
const response = await fetch(url)
const data = await response.json()
console.log(data)
}
getdata()