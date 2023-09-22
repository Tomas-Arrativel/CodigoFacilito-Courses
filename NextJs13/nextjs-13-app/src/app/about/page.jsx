'use client';

import { useRouter } from 'next/navigation';

const AboutPage = () => {
  const router = useRouter();

  return (
    <section>
      <h1>Hello from about</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eius
        ratione alias officiis maxime ipsum fugiat voluptatem dolore tempore
        fugit, doloremque iusto corrupti iste iure sunt ea, placeat cum quaerat.
        Repellat deserunt repudiandae quam sapiente accusantium inventore ad
        voluptas voluptatum nobis facere. Maxime veritatis quisquam sint eaque
        tempora exercitationem voluptas, ratione est molestiae commodi
        reiciendis perferendis dolor pariatur amet possimus laborum, accusantium
        tempore vero explicabo nisi error obcaecati dolorum? Est totam
        asperiores nulla ex harum dolore odio velit debitis! Temporibus ipsum
        quae corporis amet fugit autem mollitia incidunt obcaecati iste, dolore
        consectetur exercitationem optio. Sequi culpa officiis veritatis
        doloribus eveniet!
      </p>

      <button
        className='about-btn'
        onClick={() => {
          router.push('/');
        }}
      >
        Click
      </button>
    </section>
  );
};

export default AboutPage;
