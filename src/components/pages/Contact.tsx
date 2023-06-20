import ContactField from '../temp/ContactField'
import HandBurger from '../temp/HandBurger'

const Contact = () => {
  return (
    <>
    <HandBurger/>
      <div className="topSideContact">
        <ContactField/>
      </div>
      {/* <div className="bottomSideContact">
      <h2>Find Me Here</h2>
      <ContactMaps/>
      </div> */}
    </>
  )
}

export default Contact