import Image from 'next/image';

export default function LargeLogo({ imageName }) {
  return (
    <div className="logo-large">
      <Image src={`/images/${imageName}`} alt="Astrolab" width={336} height={336} />
      <h1>ASTROLAB</h1>
    </div>
  );
}