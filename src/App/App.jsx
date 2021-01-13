import React, { Component } from "react";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = ({ target: { name: choice } }) => {
    this.setState((prevStare) => {
      return { [choice]: prevStare[choice] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;

    return Math.round((good / this.countTotalFeedback()) * 100) + "%";
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={"good"}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
        <FeedbackOptions
          options={"neutral"}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
        <FeedbackOptions
          options={"bad"}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export default App;
