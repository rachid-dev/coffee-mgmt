import { HeaderContainer, Title } from './style'
import { useNavigate } from 'react-router-dom';

const HomeHeader = () => {

    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <Title onClick={() => navigate('/')} >
                Coffee
            </Title>
        </HeaderContainer>
    )
}

export default HomeHeader;