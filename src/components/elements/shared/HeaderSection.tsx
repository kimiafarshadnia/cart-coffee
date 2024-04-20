import { memo, FC } from 'react';
import { Container } from 'reactstrap';

interface Props{
    className?: string;
    title: string;
    imgUrl: string;
}

const HeaderSection: FC<Props> = memo(({ title, imgUrl, className }) => {
    return (
        <Container fluid className={className}>
            <img src={imgUrl} alt={title} className='w-100 rounded'/>
            <h2>{title}</h2>
        </Container>
    );
});

export default HeaderSection;
