// Write your code here.

import './index.css'

const Banner = props => {
  const {bannerDetails} = props
  const {headerText, description} = bannerDetails

  return (
    <div>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>Show More</button>
    </div>
  )
}

export default Banner
