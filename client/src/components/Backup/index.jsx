import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import VotingIntro from "./IntroVoting";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import Title from "./Title";
import Dashboard from "./Dashboard";

function Voting () {
    const { state } = useEth();
    const [value, setValue] = useState("?");
    
    const voting = 
    <>
      <div className="voting-container">
      <Dashboard />
      </div>
      
    </>;
        return (
            <div className="voting">
            <VotingIntro />

          <Title />
          {
            !state.artifact ? <NoticeNoArtifact /> :
              !state.contract ? <NoticeWrongNetwork /> :
                voting
          }
        </div>
      );
}
export default Voting;