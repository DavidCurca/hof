import './About.scss'


export default function About(){
    const aboutText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in";
    return (
        <>
          <div className="container">
                <div className="Text">
                    <p>{aboutText}</p>
                </div>
                <div className='Rankings'>
                    <div className='SecondPLace'>
                        <p> 2 </p>
                    </div>
                    <div className='FirstPLace'>
                        <p> 1 </p>
                    </div>
                    <div className='ThirdPlace'>
                        <p> 3 </p>
                    </div>
                </div>
            </div>
        </>
    )
}
