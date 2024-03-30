const [openQuickView, setOpenQuickView] = useState(true)
const [products, setProducts] = useState([])

const fetchData = async () => {
  try {
    const url =
      "https://ark8.net/_next/data/H35V1HDNujJHfAi4D1Ycx/en-int/collections/overwatch-2.json?locale=en-int&slug=overwatch-2"
    const response = await axios.get(url, { mode: "no-cors" })
    const data = response.data
    setProducts(data.pageProps.allProductsOfSameCollection)
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}
console.log(products)

useEffect(() => {
  fetchData()
}, [])
