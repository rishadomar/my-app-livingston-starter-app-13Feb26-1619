import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

type ComponentProps = {
    onClick: () => void;
};

const SidebarCloseButton = ({ onClick }: ComponentProps) => {
    return (
        <Button variant='tertiary' size='lg' className='sidebar-close-button-mobile' onClick={onClick}>
            <FontAwesomeIcon icon={faTimes} />
        </Button>
    );
};

export default SidebarCloseButton;
