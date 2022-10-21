import { useNavigate } from 'react-router-dom';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import './deploymentArrow.scss'

export const DeploymentArrow = () => {

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }
    const onNavigateNext = () => {
        navigate(+1);
    }

    return (
        <div className='arrowContainer'>
            <ArrowBackIos onClick={ onNavigateBack }/>
            <ArrowForwardIos onClick={ onNavigateNext }/>
        </div>
    )
}

