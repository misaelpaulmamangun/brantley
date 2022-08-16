import css from './hero.module.css'

const Hero = () => {
  return (
    <>
      <section className={css.background}>
        <div className={css.opacity}>
          <div className={`container ${css.inner}`}>
            <div>
              <h1 className={`title is-1 has-text-white ${css.title}`}>
                Lorem, ipsum dolor.
              </h1>
              <p className='title is-5 has-text-white'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className='button'>Get Started</button>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
