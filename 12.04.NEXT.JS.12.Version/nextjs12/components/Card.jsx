import Link from 'next/Link'

export default function Card({ animal }) {
  return (
    <li>
      <Link href={`/detail/${animal.id}`}>
        <img src={animal.img.src} />
        <div>{animal.name}</div>
      </Link>
    </li>
  )
}