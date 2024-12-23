import Card from "../components/Card"

export default function Home({ animals }) {
  console.log(animals)
  return (
    <ul>
      {animals.map((el) => (
        <Card key={el.id} animal={el} />
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/animal')
  const data = await res.json()

  return {
    props: {
      animals: data
    }
  }
}

