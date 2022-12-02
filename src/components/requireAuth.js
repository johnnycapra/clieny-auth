import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const requireAuth = (Component) => {
    return props => {
        const navigation = useNavigate(); 
        console.log(props.auth)
        useEffect(() => {
            if(!props.auth ) {
                navigation("/")
            }
        });

        return <Component {...props}/>
    };
};

export default requireAuth;