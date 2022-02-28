import ProfilePic from "./ProfileImage"
import User from "./User"
import Timestamp from './Timestamp';
import Message from "./Message"
import Actions from "./Actions"


function Tweet(prop) {
  return (
    <div className="tweet">
      <ProfilePic image={prop.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User user= {prop.tweet.user}/>
          <Timestamp time = {prop.tweet.timestamp} />
        </div>

          <Message message = {prop.tweet.message} />

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
