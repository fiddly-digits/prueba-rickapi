type props = {
  data: { name: string; status: string; image: string };
};

export default function Card({ data }: props) {
  const { name, status, image } = data;
  return (
    <div className='flex border'>
      <img src={image} alt='' />
      <h1>{name}</h1>
      <p>{status}</p>
    </div>
  );
}
