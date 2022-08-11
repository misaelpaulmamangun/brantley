import Hero from '../../components/Hero'
import MainLayout from '../../layouts/Main'
import css from './home.module.css'
import leavesImg from './../../assets/leaves.png'

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <section className='mt-4 mb-4 px-4'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <div class='card'>
                <div class='card-content'>
                  <div class='content'>
                    <div
                      className={`is-flex is-align-items-center ${css.icon}`}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        width={40}
                      >
                        <path d='M96 256H128V512H0V352H32V320H64V288H96V256zM512 352V512H384V256H416V288H448V320H480V352H512zM320 64H352V448H320V416H192V448H160V64H192V32H224V0H288V32H320V64zM288 128H224V192H288V128z' />
                      </svg>
                      <h2 className={css.h2}>Adventure</h2>
                    </div>
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
                    <div
                      className={`is-flex is-align-items-center ${css.icon}`}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        width={40}
                      >
                        <path d='M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z' />
                      </svg>
                      <h2 className={css.h2}>Discover</h2>
                    </div>
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
                    <div
                      className={`is-flex is-align-items-center ${css.icon}`}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 384 512'
                        width={30}
                      >
                        <path d='M384 312.7c-55.1 136.7-187.1 54-187.1 54-40.5 81.8-107.4 134.4-184.6 134.7-16.1 0-16.6-24.4 0-24.4 64.4-.3 120.5-42.7 157.2-110.1-41.1 15.9-118.6 27.9-161.6-82.2 109-44.9 159.1 11.2 178.3 45.5 9.9-24.4 17-50.9 21.6-79.7 0 0-139.7 21.9-149.5-98.1 119.1-47.9 152.6 76.7 152.6 76.7 1.6-16.7 3.3-52.6 3.3-53.4 0 0-106.3-73.7-38.1-165.2 124.6 43 61.4 162.4 61.4 162.4.5 1.6.5 23.8 0 33.4 0 0 45.2-89 136.4-57.5-4.2 134-141.9 106.4-141.9 106.4-4.4 27.4-11.2 53.4-20 77.5 0 0 83-91.8 172-20z' />
                      </svg>
                      <h2 className={css.h2}>Nature</h2>
                    </div>
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
              <h1 className='is-size-2'>
                Lorem ipsum dolor sit, amet consectetur adipisicing.
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
              <button className='button is-dark mt-4'>Learn More</button>
            </div>
            <div className='column' style={{ textAlign: 'center' }}>
              <img src={leavesImg} width={400} alt='nature' />
            </div>
          </div>
        </div>
      </section>

      <section className='mt-4 mb-4 px-4'>
        <div className='container'>
          <h2 className='is-size-2 has-text-centered'>
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className='has-text-centered mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde alias
            explicabo dolores minima molestiae officia nemo sequi, itaque
            consectetur doloremque tempore. Mollitia sit praesentium ea!
            Laboriosam cupiditate id saepe sed!
          </p>
          <div
            className='is-flex is-align-items-center is-justify-content-center'
            style={{ gap: '1rem' }}
          >
            <div>
              <img src='https://placehold.jp/300x300.png' alt='' />
            </div>
            <div>
              <img src='https://placehold.jp/300x300.png' alt='' />
            </div>
            <div>
              <img src='https://placehold.jp/300x300.png' alt='' />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Home
