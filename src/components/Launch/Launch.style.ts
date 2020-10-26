import { makeStyles } from '@material-ui/core/styles';
import {grey, green} from "@material-ui/core/colors"

export const launchCardStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginBottom:20,
      marginTop:20,
      marginLeft:"10%",
      marginRight:"10%"
    },

    media: {
      height: 200,
    },

    action_container: {
      justifyContent: "center"
    },

    successBtn: {
      color: grey[50],
      background: "#32d832"
    }
});