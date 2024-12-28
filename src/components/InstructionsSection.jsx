import '../styles/InstructionsSection.css'

function InstructionsSection({stepText, instructions, inputFields, inputFunctions, stepVids, stepNum, children}){
    return(
        <>
            <div className="instructionsParent">
                <div className="instructionText">
                    <div className="stepTxt">{stepText}</div>
                    <div className="inputs">{inputFields}</div>
                    <div className="instructions">{instructions}</div>
                    {children}
                </div>
                <div className="vids">
                    {stepVids}
                </div>
            </div>
            {stepNum != 0 ? 
                <button
                    onClick={inputFunctions[1]}
                >
                    back
                </button>
                :
                <></>
            }
            {
                stepNum <= 5 ? 
                <button
                    onClick={inputFunctions[0]}
                >
                    forwards
                </button>
                :
                <></>
            }
            
            
        </>  
    );
}

export default InstructionsSection