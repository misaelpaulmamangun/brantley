import Hero from '../components/Hero'
import MainLayout from '../layouts/main'
import leavesImg from './../assets/img/leaves.png'

const Home = () => {
  return (
    <MainLayout>
      <Hero
        title='Brantley'
        subtitle='Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quo in consectetur aperiam libero est esse tempore,
        voluptas reprehenderit? Nulla eius provident praesentium
        ullam cum. Officiis reiciendis impedit iure maxime
        blanditiis.'
        hasButton={true}
      />
      <section className='mt-4 mb-4 px-4'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <div class='card'>
                <div class='card-content'>
                  <div class='content'>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quo in consectetur aperiam libero est esse tempore,
                      voluptas reprehenderit? Nulla eius provident praesentium
                      ullam cum. Officiis reiciendis impedit iure maxime
                      blanditiis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='column'>
              <div class='card'>
                <div class='card-content'>
                  <div class='content'>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quo in consectetur aperiam libero est esse tempore,
                      voluptas reprehenderit? Nulla eius provident praesentium
                      ullam cum. Officiis reiciendis impedit iure maxime
                      blanditiis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='column'>
              <div class='card'>
                <div class='card-content'>
                  <div class='content'>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quo in consectetur aperiam libero est esse tempore,
                      voluptas reprehenderit? Nulla eius provident praesentium
                      ullam cum. Officiis reiciendis impedit iure maxime
                      blanditiis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-4 mb-4 has-background-white py-6 px-4'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <h1 className='is-size-2 has-text-weight-medium'>
                Lorem ipsum dolor sit.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, maxime beatae molestiae omnis sint unde illo
                praesentium nesciunt? Illum, accusamus itaque? Magnam eum
                incidunt quaerat repellat est! Soluta, esse vel.
              </p>
              <p className='mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, dicta iusto. Ad ipsam atque commodi placeat quos
                deserunt doloremque laudantium?
              </p>
              <button class='button is-primary is-outlined mt-4'>
                Learn More
              </button>
            </div>
            <div className='column' style={{ textAlign: 'center' }}>
              <img src={leavesImg} width={400} alt='nature' />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Home
