import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(emojy => <Entry
        key={emojy.id}
        name={emojy.name}
        emoji={emojy.emoji}
        meaning={emojy.meaning}
      />)}

        {/* <Entry
          name="Tense Biceps"
          emoji="💪"
          meaning="You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        />

        <Entry
          name="Tense Person With Folded Hands"
          emoji="🙏"
          meaning="Two hands pressed together. Is currently very introverted, saying a
          prayer, or hoping for enlightenment. Is also used as a “high five”
          or to say thank you."
        />

        <Entry
          name="Rolling On The Floor, Laughing"
          emoji="🤣"
          meaning="This is funny! A smiley face, rolling on the floor, laughing. The
          face is laughing boundlessly. The emoji version of “rofl“. Stands
          for „rolling on the floor, laughing“."
        /> */}
      </dl>
    </div>
  );
}

export default App;
