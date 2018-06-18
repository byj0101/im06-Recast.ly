
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      word: '',
      item: exampleVideoData,
      autoPlay: false
    };
  }

  clickAutoPlay() {
    console.log(1);
    this.setState({
      autoPlay: !this.state.autoPlay
    });
  }

  onListClick(i) {
    this.setState({
      index: i
    });
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      word: e.target.value
    });
    this.props.searchYouTube(this.state.word, (data) => {
      this.setState({
        item: data
      });
    });
  }

  clickButton() {
    console.log('hi');
    console.log(this.state.word);
  }

  render() {
    return (
      <div>
        <Nav search={this.handleChange.bind(this)} click={this.clickButton.bind(this)} />
        <div className="col-md-7 video-player" >
          <VideoPlayer video={this.state.item[this.state.index]} auto={this.clickAutoPlay.bind(this)}/>
        </div>
        <div className="col-md-5 video-list">
          <VideoList videos={this.state.item} func= {this.onListClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;