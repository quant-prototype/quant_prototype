import './StandardButton.css'

function StandardButton({title, backgroundColor='blue', color='white', onClick, width='100%', height= '100%'}){
    return(
        <div style={{width: width, height: height}}>
        <button className="button" style={{width:'100%', height:'100%', backgroundColor: backgroundColor, color: color, display: 'flex', justifyContent:'center', alignItems:'center'}} onClick={onClick} >
            <div style={{color: color}}>{title}</div>
        </button>
        </div>
    )
}
export default StandardButton;
