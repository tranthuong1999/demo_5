import Drawer from '@mui/material/Drawer';
import "./style.scss"


function DrawerCommon(props: { open: boolean, onClose: () => void, content?: any, className?: string }) {
    const { open, onClose, content, className } = props;

    return (
        <Drawer open={open} onClose={onClose} classes={{ root: className }} >
            {content}
        </Drawer>
    );
}
export default DrawerCommon;