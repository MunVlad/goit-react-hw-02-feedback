import React, {Component} from "react";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleIncrementStates = state => {
    this.setState(prevState => {
      return {
         ...prevState,
         [state]: prevState[state] + 1,
      }
    });
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
  return total === 0 ? 0 : Math.round((good / total) * 100);
  }


  render() {
    return (<div>
      <h1>Please leave feedback</h1>
      <div>
        <button type='button' onClick ={() => this.handleIncrementStates("good")}>Good</button>
        <button type='button' onClick ={() => this.handleIncrementStates("neutral")}>Neutral</button>
        <button type='button' onClick ={() => this.handleIncrementStates("bad")}>Bad</button>
        <h2>Statistics</h2>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
          <li>Total:{this.countTotalFeedback()}</li>
          <li>Positive feedback:{this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </div>
</div>)
  }
}
export default App;