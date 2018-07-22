import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

class App extends React.Component {
  state = {
    friends: friends
  };

  remove = (id) => {
    this.setState({
      friends: this.state.friends.filter(function (friend) {
        return friend.id !== id;
      })
    });
  }

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {friends.map((friend) => <FriendCard
          id={friend.id}
          image={friend.image}
          location={friend.location}
          name={friend.name}
          occupation={friend.occupation}
          remove={this.remove}
        />)}
      </Wrapper>
    );
  }
}

export default App;
