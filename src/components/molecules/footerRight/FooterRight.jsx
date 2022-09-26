import { CreateOutlined, PhonelinkOutlined, PlaylistPlay, VolumeUpOutlined } from "@mui/icons-material";
import { Slider } from "@mui/material";
import './footerRight.scss';


export const FooterRight = () => {
  return (
    <div className="footer-right">
        <CreateOutlined className="footer-right__icon"/>
        <PlaylistPlay  className="footer-right__icon"/>
        <PhonelinkOutlined className="footer-right__icon"/>
        <div className="footer-right__volume">
            <VolumeUpOutlined/>
            <Slider className="footer-right__Slider"/>
        </div>
    </div>
    )
}