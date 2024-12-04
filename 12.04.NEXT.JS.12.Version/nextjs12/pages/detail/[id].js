import FavoriteButton from "../../components/FavoriteButton";

export default function Detail({ animalData }) {
  return (
    <section className="detail">
      <img src={animalData?.img.src} />
      <h2>
        {animalData?.name}
        <FavoriteButton animalId={animalData.id} />
      </h2>
      <div>{animalData?.description}</div>
    </section>
  );
}

// getStaticProps -> 잘 변하지 않는 데이터를 받아올 떄
// getStaticPaths -> 잘 변하지 않는 데이터를 받아오지만, 동적 라우팅 필요할 떄
// getServerSideProps -> 잘 변하는 데이터를 받아올 때 


export async function getStaticPaths() {
  return {
    paths: [
      { params: {id: '0'}}
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

