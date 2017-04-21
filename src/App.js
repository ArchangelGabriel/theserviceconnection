import React, { Component } from 'react';
import Icon from './Icon';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }

    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    var intervalId = setInterval(this.timer, 1000);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer() {
    var today = new Date();
    var veteransDay = new Date("11/11/2017");
    var delta = Math.abs(veteransDay - today) / 1000;
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    var seconds = Math.floor(delta % 60);
    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="App">
        <div className="with-background pb1">
          <div className="logo df jcc aic pt3 mb3">
            <Icon size="2.8em" icon="circles-extended" />
            <div>THE SERVICE<br />CONNECTION</div>
          </div>

          <h1 className="title lg mt1">
            <span className="orange">VETERANS</span> DAY 2017
          </h1>

          <h3 className="subtitle mb2">
            MARKS THE START OF A NEW ERA FOR <span className="orange">VETERANS DISABILITY</span> COMPENSATION
          </h3>

          <div className="clock pt2 pb2">
            <div className="item">
              <div className="value">{days}</div>
              <label className="label orange-topline">Days</label>
            </div>
            <div className="item">
              <div className="value">{hours}</div>
              <label className="label orange-topline">Hours</label>
            </div>
            <div className="item">
              <div className="value">{minutes}</div>
              <label className="label orange-topline">Minutes</label>
            </div>
            <div className="item">
              <div className="value">{seconds}</div>
              <label className="label orange-topline">Seconds</label>
            </div>
          </div>
        </div>

        <div className="subscription-box pt1 pb1">
          <h4>NEED HELP WITH SERVICE CONNECTION? SUBSCRIBE TO OUR NEWSLETTER TO GET THE LATEST UPDATES.</h4>
          <div role="search">
        		<form id="searchform">
      				<input type="text" size="15" id="s" name="s" placeholder="Email Address" />
      				<label htmlFor="s">Subscribe</label>
      				<input type="submit" id="go" value="SUBSCRIBE" />
        		</form>
          </div>
        </div>

        <div className="white-bg">
          <h1 className="title sm mt2 mb2 pb1">
            <span className="orange-underline">MAIN FEATURES</span>
          </h1>
          <div className="features">
            <div className='feature'>
              <div className="mb1"><span className="with-bg"><Icon size="4em" icon="access-time" /></span></div>
              <span className="feature-label mb2 pt1">REAL TIME, <br />TAILORED SOLUTION</span>
            </div>
            <div className='feature'>
              <div className="mb1"><span className="with-bg"><Icon size="4em" icon="tv-options-parental" /></span></div>
              <span className="feature-label mb2 pt1">EXPERT CONTENT</span>
            </div>
            <div className='feature'>
              <div className="mb1"><span className="with-bg"><Icon size="4em" icon="forum" /></span></div>
              <span className="feature-label mb2 pt1">USER MODERATED <br />DISCUSSION FORUM</span>
            </div>
          </div>
        </div>

        <footer className="footer mt1 pt2 pb2">
          Copyrights 2017 all rights reserved.
        </footer>
      </div>
    );
  }
}

export default App;
