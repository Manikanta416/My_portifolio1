import './Mywork.css';
import Mywork_Data from '../../assets/Mywork.js'
const Mywork = () => {
  const handleshowmore=()=>{
    window.open("https://github.com/Manikanta416","_blank");

  };
  return (
    <div id="work" className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        
      </div>
      <div className="mywork-container">
        {Mywork_Data.map((work,index)=>(
          <div key={index} className="mywork-item">
          <p className="mywork-name">{work.name}</p>
          <img src={work.s_img} alt={work.name} />
        </div>

        )
    )}

      </div>
      <div className="mywork-showmore" onClick={handleshowmore}>
                <p>Show More →</p>
              </div>
    </div>
  )
}

export default Mywork;
