
const Header2 = ({heading,pera}) => {
  return (
    <div>
       <div className="rs-breadcrumbs img1">
        <div className="container">
          <div className="breadcrumbs-inner">
            <h1 className="page-title">
              {heading}
              {/* <span className="watermark">{heading}</span> */}
            </h1>
            <span className="sub-text text-justify">
             {pera}<br />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header2
