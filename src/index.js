// please get React from my installed modules and give me access in this file
// this library knows how to recognize react components
import React, {Component} from "react";
// reactDoM renders the components to the DOM
import ReactDOM from "react-dom";
import _ from "lodash";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyCkqutUf41s1uWzfv9IsGM72dZh62JV64Y";


class App extends Component {
    constructor(props){
        super(props)
        this.state={
            videos: [],
            selectedVideo: null
        }
        this.videoSearch("surfboards");
    }
    
    videoSearch(term){
        YTSearch({key: API_KEY, term: term},(videos)=>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });

    }
    render(){
        const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300)
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));