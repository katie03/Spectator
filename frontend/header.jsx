import spec from './spec.png';

function Header() {
    return(
        <div className = "header">
          <div className = "image">
            <img src = {spec} width="305" height="67"/>
          </div>
          <div className="title">Spec's Sources</div> 
        </div>
    )
}

export default Header