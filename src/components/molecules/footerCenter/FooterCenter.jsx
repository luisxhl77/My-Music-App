import { PlayCircle, Repeat, Shuffle, SkipNext, SkipPrevious } from "@mui/icons-material";
import { Slider } from "@mui/material";
import './footerCenter.scss';

export const FooterCenter = () => {
    return (
        <div className="footer-center">
            <div className="footer-center__options-Play">
                <Shuffle className="footer-center__iconPlayer"/>
                <SkipPrevious className="footer-center__iconPlayOption"/>
                <PlayCircle className="footer-center__btnPlay"/>
                <SkipNext className="footer-center__iconPlayOption"/>
                <Repeat className="footer-center__iconPlayer"/>
            </div>
            <time className="footer-center__time">
                <p>2:32</p>
                <Slider className="footer-center__time-bar"/>
                <p>1:28</p>
            </time>
        </div>
    )
}