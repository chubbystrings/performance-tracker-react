import React from 'react';
import { ProgressWrapper, Flex, Progress} from './PerformanceList.style';


const PerformanceList: React.FC<{stack: string; progress: number}> = (props) => {
    return (
       <ProgressWrapper>
           <p>{props.stack}</p>
           <div>
                <Flex>
                    <Progress progress={props.progress}>
                        <div></div>
                    </Progress>
                    <div>{props.progress}</div>
                </Flex>
           </div>
       </ProgressWrapper>
    )
}

export default PerformanceList