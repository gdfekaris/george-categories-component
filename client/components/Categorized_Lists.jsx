import React from 'react';
import RecentBroadcasts from './RecentBroadcasts.jsx';
import RecentHighlights from './RecentHighlights.jsx';
import PopularClips from './PopularClips.jsx';
import AllVideos from './AllVideos.jsx';
import { Switch, HashRouter, Route } from 'react-router-dom';
const gameData = require('../../database/gameData.js');

export default class Categorized_Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: gameData.allVideos,
      recentBroadcasts: gameData.videos,
      recentHighlights: gameData.videos,
      popularClips: gameData.clips,
    }
  };

  // componentDidMount() {
  //   let allVideos = {};
  //   fetch('/recent-broadcasts')
  //     .then(response => response.json())
  //     .then((data) => {
  //       allVideos.recentBroadcasts = data;
  //       return fetch('/recent-highlights');
  //     })
  //     .then(response => response.json())
  //     .then((data) => {
  //       allVideos.recentHighlights = data;
  //       return fetch('/popular-clips');
  //     })
  //     .then(response => response.json())
  //     .then((data) => {
  //       allVideos.popularClips = data;
  //       return allVideos;
  //     })
  //     .then((allVideos) => {
  //       let all = allVideos.recentBroadcasts.concat(allVideos.recentHighlights, allVideos.popularClips);
  //       this.setState({
  //         allVideos: all,
  //         recentBroadcasts: allVideos.recentBroadcasts,
  //         recentHighlights: allVideos.recentHighlights,
  //         popularClips: allVideos.popularClips
  //       });
  //     });
  // };

  render() {
    if (this.state.recentBroadcasts === null || this.state.recentHighlights === null || this.state.popularClips === null) {
      return (<div data-testid="loading-div">Loading ...</div>);
    } else {
      return (
        <HashRouter>
          <Switch>
            <Route exact={true} path="/" render={() => (
              <div data-testid="main-container">
                <RecentBroadcasts videos={this.state.recentBroadcasts} />
                <RecentHighlights videos={this.state.recentHighlights} />
                <PopularClips videos={this.state.popularClips} />
                <AllVideos videos={this.state.allVideos} />
              </div>
            )} />
            <Route exact={true} path="/videos" render={() => (
              <div data-testid="main-container">
                <RecentBroadcasts videos={this.state.recentBroadcasts} />
                <RecentHighlights videos={this.state.recentHighlights} />
                <PopularClips videos={this.state.popularClips} />
                <AllVideos videos={this.state.allVideos} />
              </div>
            )} />
          </Switch>
        </HashRouter>
      );
    }
  };
};