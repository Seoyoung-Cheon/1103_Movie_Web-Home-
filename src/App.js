import Movie from "./components/Movie";
import { dummy } from "./movieDummy";
import { PiFilmSlateFill } from "react-icons/pi";
import YouTube from "react-youtube";
import { CgMoreR } from "react-icons/cg";
import { IoLogoFreebsdDevil } from "react-icons/io";

function App() {
    return (
        <div>
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap');
            </style>
            <div className="movielogo">
                <IoLogoFreebsdDevil className="logoimg" size="80" />
                <h4>Young.Enter</h4>
            </div>
            <nav>
                <h1 className="recent-movie">
                    최신 영화
                    <div className="movie-icon">
                        <PiFilmSlateFill className="w-8 h-6 inline-block" />
                    </div>
                </h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Notice</li>
                    <li>Setting</li>
                </ul>
            </nav>
            <div className="movie-link">
                <YouTube
                    videoId="iJsWRpSetq0" //동영상 주소
                    opts={{
                        width: "100%",
                        height: "400px",
                        playerVars: {
                            autoplay: 5, //자동 재생 여부
                            modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                            loop: 1, //반복 재생
                        },
                    }}
                    onReady={(e) => {
                        e.target.mute(); //소리 끔
                    }}
                />
            </div>
            <div className="movie-choose">
                <div className="movie-text">
                    <h4 className="moviechart">무비차트 |</h4>
                    <h4 className="movieyet">상영예정작</h4>
                </div>
                <CgMoreR className="movie-button" size="40" />
            </div>
            <div className="app-container">
                {dummy.results.map((item) => {
                    return (
                        <Movie
                            title={item.title}
                            poster_path={item.poster_path}
                            vote_average={item.vote_average}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
