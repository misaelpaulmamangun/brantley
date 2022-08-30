import MainLayout from '../layouts/main'

const Contact = () => {
  return (
    <MainLayout className='px-4 pb-4 has-background-white py-4'>
      <div className='container has-background-white p-4 box'>
        <div className='columns'>
          <div className='column'>
            <h1 className='is-size-2 is-uppercase has-text-weight-bold'>
              Reach Us
            </h1>
            <div>
              <div className='is-flex is-align-items-center'>
                <p className='is-size-4 has-text-weight-semibold mr-2'>
                  Email:
                </p>
                <p className='is-size-6 has-text-weight-semibold'>
                  nature@test.com
                </p>
              </div>
              <div className='is-flex is-align-items-center'>
                <p className='is-size-4 has-text-weight-semibold mr-2'>
                  Phone:
                </p>
                <p className='is-size-6 has-text-weight-semibold'>
                  +1 000 000 0000
                </p>
              </div>
              <div className='is-flex is-align-items-center'>
                <p className='is-size-4 has-text-weight-semibold mr-2'>
                  Address:
                </p>
                <p className='is-size-6 has-text-weight-semibold'>
                  7046 Helen Street Augusta, GA 30906
                </p>
              </div>
            </div>
          </div>
          <div className='column'>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className='field'>
                <label className='label'>Name</label>
                <div className='control'>
                  <input
                    className='input'
                    type='text'
                    placeholder='Enter your name'
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                  <input
                    className='input'
                    type='email'
                    placeholder='Enter your email'
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Phone</label>
                <div className='control'>
                  <input
                    className='input'
                    type='tel'
                    placeholder='Enter your phone'
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Message</label>
                <div className='control'>
                  <textarea
                    className='textarea'
                    placeholder='Enter your message'
                  />
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <button type='submit' className='button is-link'>
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Contact
