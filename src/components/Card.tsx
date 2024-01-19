import './Card.css';

type props = {
  data: { name: string; status: string; image: string };
};

export default function Card({ data }: props) {
  const { name, status, image } = data;
  return (
    <div className='card'>
      <img src={image} alt='photo' className='card-img' />
      <h1 className='card-name'>{name}</h1>
      <p>{status}</p>
    </div>
  );
}
