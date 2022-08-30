import MainLayout from '../layouts/main'
import Hero from './../components/Hero'

const About = () => {
  const title = 'About Us'
  return (
    <>
      <MainLayout>
        <Hero title={title.toUpperCase()} />
        <div className='has-background-white'>
          <div className='container p-4'>
            <div className='mb-4'>
              <h3 className='is-size-4 is-uppercase has-text-weight-medium'>
                Who we are
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                porro quibusdam eius. Ut, voluptatum ratione quibusdam
                dignissimos ducimus at ab consectetur eum eos ad neque dolorem
                quis sunt quidem, possimus quia sequi nisi odit, consequuntur
                quasi. Laudantium beatae temporibus deserunt amet quaerat
                dolores tempore rem facilis molestiae doloremque tempora harum
                impedit doloribus nesciunt optio, tenetur aperiam in omnis
                accusantium sit?
              </p>
            </div>
            <div className='mb-4'>
              <h3 className='is-size-4 is-uppercase has-text-weight-medium'>
                We're different than the rest
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet accusamus eaque labore ducimus voluptates deleniti
                placeat qui natus totam sint veritatis nostrum mollitia
                doloremque rem, ea accusantium! Consequatur sed, sit inventore
                aperiam eius corrupti consectetur hic, voluptates totam quas
                vitae distinctio perferendis, natus dolorem earum ut neque
                beatae explicabo quod! Voluptatum culpa quasi sed nemo
                voluptatem laboriosam beatae, veritatis corrupti accusamus?
                Rerum dolor accusantium error voluptates officia, ex nisi nobis
                consequatur accusamus debitis vero, porro quam doloremque culpa
                nam ipsam?
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default About
