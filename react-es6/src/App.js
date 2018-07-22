import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import dextersLab from "./dexter.json";

var allFriends = [...friends, ...dextersLab];
console.log(allFriends);

class App extends React.Component {
  state = {
    allFriends: allFriends
  };

  remove = (id) => {
    this.setState({
      allFriends: this.state.allFriends.filter(function (friend) {
        return friend.id !== id;
      })
    });
  }

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {allFriends.map((friend) => <FriendCard
          id={friend.id}
          image={friend.image}
          location={friend.location}
          name={friend.name}
          occupation={friend.occupation}
          startsWithS={friend.name.startsWith("S") ? "true": "false"}
          remove={this.remove}
        />)}
      </Wrapper>
    );
  }
}

export default App;
