const Hero = (props) => {
  const {
    title,
    subtitle = null,
    hasButton = false,
    button = 'Get Started',
  } = props
  return (
    <>
      <section className='hero is-primary py-6'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p class='title'>{title}</p>
            <p class='subtitle'>{subtitle}</p>
            {hasButton ? (
              <button class='button is-white is-outlined is-large is-responsive'>
                {button}
              </button>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
