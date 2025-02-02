import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }){
    return ( 
        <Button 
            className={styles.btn}
        >
            {text}
        </Button>
    );
}

Button.prototype = {
    text : PropTypes.string.isRequired,
};
export default Button;