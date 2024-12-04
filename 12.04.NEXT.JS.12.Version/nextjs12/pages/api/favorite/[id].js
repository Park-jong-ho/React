import { favorites } from "../../../assets/data/data";

export default function handler(req, res) {
  const animalId = Number(req.query.id)

  if (req.method === "POST" ) {
    favorites.push(animalId)
    res.send(animalId)
  } else if (req.method === "DELETE") {
    const idx = favorites.indexOf(animalId)
    favorites.splice(idx, 1)
    res.send(animalId)
  } else {
    res.status(404).send('wrong http method')
  }
}
