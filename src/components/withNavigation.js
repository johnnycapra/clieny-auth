import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const withNavigation = (Component) => {
    return props => {
        const navigation = useNavigate();

        return <Component {...props} {...{navigation}}/>
    }
}

export default withNavigation;