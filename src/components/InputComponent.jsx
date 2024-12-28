import '../styles/InputComponent.css';

function InputComponent(txt, input){
    return(
        <>
            <div className="inputParent">
                <div className="inputTxt">{txt}</div>
                <div className="input">
                    {input}
                </div>
            </div>
        
        </>
    );
}

export default InputComponent