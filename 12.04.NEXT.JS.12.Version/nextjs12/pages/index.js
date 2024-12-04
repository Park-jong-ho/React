import Card from '../components/Card';


export default function Home({animals}) {

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

// getStaticProps
// 잘 변하지 않는 데이터를 받을 때

// getStaticPaths
// 잘 변하지 않는 데이터를 받아오지만, 동적 라우팅이 필요할 때

// gstServerSideProps
// 잘 변하는 데이터를 받아올 때