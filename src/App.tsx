import { useEffect } from "react"
import RoutesPages from "./routes/RoutesPages"

function App() {
  const crateList = () => {
    const list = [{
      id: 1,
      name: 'Mis lista',
      multimedia: [{
        id: 5,
        title: "The Matrix",
        sypnosis:
          "Un programador de computadoras descubre que la realidad que percibe es una simulación creada por máquinas inteligentes.",
        director: "The Wachowskis",
        release_date: "1999",
        rating: 5,
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        state: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlT7HFxKy00F-dF_gD82cIGrlle2xzxiTOEg&s",
        genre: "Action",
      },]
    },
    {
      id: 2,
      name: 'Me gusta',
      multimedia: []
    }
    ]

    const lists = localStorage.getItem('lists')

    if (!lists) {
      localStorage.setItem('lists', JSON.stringify(list))
    }
  }

  useEffect(() => {
    crateList()
  }, [])

  return <RoutesPages />
}

export default App
