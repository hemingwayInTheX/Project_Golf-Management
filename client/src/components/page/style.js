import { makeStyles } from "@material-ui/core";
import FallImage from "../page/background_img/fallforest.jpg";
import ColdImage from "../page/background_img/winterforest.jpg";
const api = {
    key: "8d8631dcd9c8841e4c7cf63d36fcdd18",
    base: "https://api.penweathermap.org/data/2.5/"
}
const RealImage = FallImage;
const useStyles = makeStyles((theme) => ({
    grid:{
        minHeight:'100vh',
        minWidth:'100vw',
        backgroundImage : `url(${RealImage})`,
        backgroundSize : 'cover',
        backgroundRepeat:'no-repeat',
        backgroundAttachment : 'fixed'

    },
    avatar: {
        backgroundColor: "#C8E717",
    },
    paper: {
        padding: 30,
        width: 300,
        height: 300,
        margin: "90px auto",
    },
    registerPaper: {
        padding: 30,
        width: 500,
        margin: "90px auto",
    },
    icon: {
        color: "#0C4BC4",
        fontSize: "large"
    },
    contents: {
        padding: '30px',
        width: '400px',
    },
    button: {
        top: '3vh',
    },
    radio: {
        top: '2vh',
    },
}));

export default useStyles;