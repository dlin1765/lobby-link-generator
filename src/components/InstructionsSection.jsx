import '../styles/InstructionsSection.css'

function InstructionsSection({stepText, instructions, inputFields, inputFunctions, stepVids, stepNum, children}){
    return(
        <>
            <div className="instructionWrapper">
                <div className="instructionsParent">
                    <div className="instructionText">
                        <div className="stepTxt">{stepText}</div>
                        <div className="inputs">{inputFields}</div>
                        {instructions ? <div className="instructions">{instructions}</div> : <></>}
                        {children}
                        
                    </div>
                    <div className="vids">
                        {stepVids}
                        
                    </div>
                </div>
                <div className="stepButtons">
                    {stepNum != 0 ?
                        <button
                            onClick={inputFunctions[1]}
                        >
                            Previous
                        </button>
                        :
                        <div></div>
                    }

                    {
                        stepNum < 6 ?
                        <button
                            onClick={inputFunctions[0]}
                        >
                            Next
                        </button>
                        :
                        <div></div>
                    }
                </div>
            </div>
            
            
            
            
        </>  
    );
}

export default InstructionsSection