import { useNavigate } from 'react-router-dom';

const withNavigation = (Component) => {
    return props => {
        const navigation = useNavigate();
        return <Component {...props} {...{navigation}}/>
    }
}

export default withNavigation;