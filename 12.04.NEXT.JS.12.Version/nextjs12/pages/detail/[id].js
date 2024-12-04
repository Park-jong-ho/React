export default function Detail({animalData}) {
  return (
    <section className="detail">
      <img src={animalData?.img.src} />
      <h2>{animalData?.name}</h2>
      <div>{animalData?.description}</div>
    </section>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: {id: '0'}}
    ],
    fallback: true
  }
}

export async function getStaticProps(context) {
  const animalId = context.params.id
  const res = await fetch(`http://localhost:3000/api/animal/${animalId}`)
  const data = await res.json()

  return {
    props: {
      animalData: data
    }
  }
}