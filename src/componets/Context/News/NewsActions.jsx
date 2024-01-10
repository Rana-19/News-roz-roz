export const fetchNews = async (topic) => {


    try {
        const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_361885cf1964d67b78f79e58b239c7f51cf80&q=${topic}`)
        const data = await response.json()
        // console.log(data);
        return data.results


    } catch (error) {
        console.log("error occurred");

    }


}
`https://newsdata.io/api/1/archive?apikey=pub_361885cf1964d67b78f79e58b239c7f51cf80&q=example&language=en&from_date=2023-01-19&to_date=2023-01-25`